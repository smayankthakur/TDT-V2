import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getRandomCards } from '@/lib/tarot/cards'

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
    const { question } = body

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    // Draw 3 random cards
    const cards = getRandomCards(3)

    // Generate interpretation based on cards
    const interpretation = generateInterpretation(cards, question)

    // Store reading in database
    const { data: reading, error: dbError } = await supabase
      .from('readings')
      .insert({
        user_id: user.id,
        question: question.trim(),
        cards: cards.map((card) => ({
          id: card.id,
          name: card.name,
          suit: card.suit,
          meaning: card.meaning,
          reversedMeaning: card.reversedMeaning,
          description: card.description,
          keywords: card.keywords,
          image: card.image,
        })),
        interpretation,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (dbError) {
      console.error('Error storing reading:', dbError)
      // Still return the reading even if storage fails
    }

    return NextResponse.json({
      success: true,
      data: {
        cards,
        interpretation,
        readingId: reading?.id,
      },
    })
  } catch (error) {
    console.error('Error in tarot draw:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateInterpretation(cards: any[], question: string): string {
  const cardNames = cards.map((c) => c.name).join(', ')
  
  const interpretations = [
    `The cards reveal a powerful message about your question: "${question}". The ${cards[0].name} in the first position suggests ${cards[0].meaning.toLowerCase()}. This is complemented by the ${cards[1].name}, which indicates ${cards[1].meaning.toLowerCase()}. Finally, the ${cards[2].name} brings ${cards[2].meaning.toLowerCase()}. Together, these cards suggest that you are on the right path. Trust your intuition and embrace the journey ahead.`,
    
    `Your reading shows a clear path forward. The ${cards[0].name} represents ${cards[0].keywords[0]} and ${cards[0].keywords[1]}, suggesting that ${cards[0].description.toLowerCase()}. The ${cards[1].name} in the second position speaks to ${cards[1].keywords[0]} and ${cards[1].keywords[2]}, reminding you that ${cards[1].description.toLowerCase()}. The ${cards[2].name} concludes your reading with ${cards[2].keywords[0]} and ${cards[2].keywords[1]}, indicating that ${cards[2].description.toLowerCase()}.`,
    
    `The universe has spoken through the cards. The ${cards[0].name} appears to guide you toward ${cards[0].keywords[0]}. This is followed by the ${cards[1].name}, which emphasizes ${cards[1].keywords[1]} and ${cards[1].keywords[2]}. The ${cards[2].name} completes your reading, bringing ${cards[2].keywords[0]} and ${cards[2].keywords[3]}. These cards together suggest that your question about "${question}" is being answered through ${cards[0].keywords[0]}, ${cards[1].keywords[0]}, and ${cards[2].keywords[0]}.`,
  ]

  return interpretations[Math.floor(Math.random() * interpretations.length)]
}
