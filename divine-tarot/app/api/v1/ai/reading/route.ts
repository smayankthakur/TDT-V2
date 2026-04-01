import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { config } from '@/lib/config'

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    
    // Get authenticated user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { user_question, selected_cards } = body

    // Validate input
    if (!user_question || typeof user_question !== 'string' || user_question.trim().length === 0) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    if (!selected_cards || !Array.isArray(selected_cards) || selected_cards.length === 0) {
      return NextResponse.json(
        { error: 'Selected cards are required' },
        { status: 400 }
      )
    }

    // Check if OpenAI API key is configured
    if (!config.ai.openaiApiKey) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 503 }
      )
    }

    // Create streaming response
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Prepare card information for prompt
          const cardsInfo = selected_cards.map((card: any, index: number) => {
            return `Card ${index + 1}: ${card.name} (${card.suit})
- Meaning: ${card.meaning}
- Reversed Meaning: ${card.reversedMeaning}
- Description: ${card.description}
- Keywords: ${card.keywords.join(', ')}`
          }).join('\n\n')

          // Create the prompt
          const prompt = `You are a mystical tarot reader with deep spiritual insight. Interpret the following tarot cards in relation to the user's question.

User's Question: "${user_question}"

Selected Cards:
${cardsInfo}

Provide a deep, mystical interpretation that includes:
1. Emotional Insight: What emotions and feelings the cards reveal about the situation
2. Practical Advice: Actionable guidance for the user's current circumstances
3. Future Guidance: What the cards suggest about potential outcomes and paths forward

Be mystical, insightful, and compassionate. Use spiritual language while remaining grounded and practical.

Respond in a structured format with clear sections for each aspect.`

          // Call OpenAI API with streaming
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${config.ai.openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini', // Using mini for cost optimization
              messages: [
                {
                  role: 'system',
                  content: 'You are a mystical tarot reader with deep spiritual insight. You provide compassionate, insightful, and practical guidance based on tarot cards. Your readings are mystical yet grounded, offering both emotional depth and actionable advice.',
                },
                {
                  role: 'user',
                  content: prompt,
                },
              ],
              stream: true,
              max_tokens: 1000,
              temperature: 0.8, // Slightly creative but not too random
            }),
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.error?.message || 'OpenAI API error')
          }

          // Process streaming response
          const reader = response.body?.getReader()
          if (!reader) {
            throw new Error('No response body')
          }

          let fullContent = ''
          const decoder = new TextDecoder()

          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split('\n').filter(line => line.trim() !== '')

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                if (data === '[DONE]') {
                  break
                }

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.choices?.[0]?.delta?.content || ''
                  if (content) {
                    fullContent += content
                    // Send chunk to client
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }

          // Parse the full content to extract structured data
          const interpretation = parseInterpretation(fullContent)

          // Send final structured response
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                done: true,
                interpretation,
              })}\n\n`
            )
          )

          controller.close()
        } catch (error) {
          console.error('Error in AI reading:', error)
          const errorMessage = error instanceof Error ? error.message : 'Internal server error'
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                error: errorMessage,
              })}\n\n`
            )
          )
          controller.close()
        }
      },
    })

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Error in AI reading endpoint:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function parseInterpretation(content: string): {
  summary: string
  advice: string
  energy: string
  outcome: string
} {
  // Default structure
  const interpretation = {
    summary: '',
    advice: '',
    energy: '',
    outcome: '',
  }

  // Try to extract sections from the content
  const lines = content.split('\n')
  let currentSection = ''

  for (const line of lines) {
    const lowerLine = line.toLowerCase().trim()

    if (lowerLine.includes('emotional insight') || lowerLine.includes('emotion')) {
      currentSection = 'summary'
      continue
    } else if (lowerLine.includes('practical advice') || lowerLine.includes('advice')) {
      currentSection = 'advice'
      continue
    } else if (lowerLine.includes('future guidance') || lowerLine.includes('outcome')) {
      currentSection = 'outcome'
      continue
    } else if (lowerLine.includes('energy') || lowerLine.includes('spiritual')) {
      currentSection = 'energy'
      continue
    }

    // Add content to current section
    if (currentSection && line.trim()) {
      interpretation[currentSection as keyof typeof interpretation] += line + '\n'
    }
  }

  // If parsing didn't work well, use the full content
  if (!interpretation.summary && !interpretation.advice) {
    interpretation.summary = content.substring(0, 300)
    interpretation.advice = content.substring(300, 600)
    interpretation.energy = 'The cards carry a powerful spiritual energy that resonates with your current situation.'
    interpretation.outcome = content.substring(600, 900) || 'The universe guides you toward positive transformation.'
  }

  // Clean up the extracted text
  Object.keys(interpretation).forEach((key) => {
    interpretation[key as keyof typeof interpretation] = interpretation[key as keyof typeof interpretation]
      .trim()
      .replace(/^\d+\.\s*/, '') // Remove numbering
      .replace(/^[-*]\s*/, '') // Remove bullet points
  })

  return interpretation
}
