'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AIGuidePage() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    // Simulate AI response
    setTimeout(() => {
      setResponse(
        `The cards reveal that your question about "${question}" holds deep significance. Trust your intuition and embrace the journey ahead. The universe is guiding you toward positive transformation.`
      )
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif">AI Tarot Guide</h1>
          <p className="text-xl text-muted-foreground">
            Get instant spiritual guidance powered by AI
          </p>
        </div>

        <div className="p-8 rounded-lg border bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="question" className="text-sm font-medium">
                Ask your question
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What guidance do you seek today?"
                className="w-full h-32 px-4 py-3 rounded-md border bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Consulting the Cards...' : 'Get Guidance'}
            </Button>
          </form>

          {response && (
            <div className="mt-8 p-6 rounded-lg bg-muted">
              <h3 className="text-lg font-semibold mb-3">Your Reading</h3>
              <p className="text-muted-foreground leading-relaxed">{response}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-card text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Instant Answers</h3>
            <p className="text-sm text-muted-foreground">
              Get immediate guidance without waiting
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Private & Secure</h3>
            <p className="text-sm text-muted-foreground">
              Your questions remain confidential
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-center">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="font-semibold mb-2">24/7 Available</h3>
            <p className="text-sm text-muted-foreground">
              Access guidance anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
