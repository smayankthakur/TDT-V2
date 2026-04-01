'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import type { TarotCard } from '@/lib/tarot/cards'

export default function TarotPage() {
  const { user } = useAuth()
  const [question, setQuestion] = useState('')
  const [cards, setCards] = useState<TarotCard[]>([])
  const [interpretation, setInterpretation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false])

  const handleDrawCards = async () => {
    if (!question.trim()) {
      setError('Please enter your question')
      return
    }

    if (!user) {
      setError('Please login to draw cards')
      return
    }

    setLoading(true)
    setError(null)
    setCards([])
    setInterpretation('')
    setFlippedCards([false, false, false])

    try {
      const response = await fetch('/api/v1/tarot/draw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to draw cards')
      }

      setCards(data.data.cards)
      setInterpretation(data.data.interpretation)

      // Animate cards flipping one by one
      setTimeout(() => setFlippedCards([true, false, false]), 500)
      setTimeout(() => setFlippedCards([true, true, false]), 1000)
      setTimeout(() => setFlippedCards([true, true, true]), 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setQuestion('')
    setCards([])
    setInterpretation('')
    setFlippedCards([false, false, false])
    setError(null)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold font-serif mystical-gradient bg-clip-text text-transparent"
          >
            Tarot Reading
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ask your question and draw three cards to receive guidance from the universe
          </motion.p>
        </div>

        {/* Question Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-medium">
                  Ask Your Question
                </label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => {
                    setQuestion(e.target.value)
                    setError(null)
                  }}
                  placeholder="What guidance do you seek today?"
                  className="w-full h-32 px-4 py-3 rounded-lg border bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={handleDrawCards}
                  disabled={loading || !question.trim()}
                  className="flex-1 h-12 text-lg font-semibold"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Drawing Cards...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      🎴 Draw Cards
                    </span>
                  )}
                </Button>

                {cards.length > 0 && (
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="h-12"
                  >
                    New Reading
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Display */}
        <AnimatePresence>
          {cards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-full max-w-xs aspect-[2/3] perspective-1000">
                      <motion.div
                        className="w-full h-full relative preserve-3d"
                        animate={{
                          rotateY: flippedCards[index] ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.3,
                          type: 'spring',
                          stiffness: 100,
                        }}
                      >
                        {/* Card Back */}
                        <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 border-2 border-purple-500/30 shadow-2xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="text-6xl animate-pulse-glow">✨</div>
                            <div className="text-2xl font-bold text-purple-200 font-serif">
                              Divine Tarot
                            </div>
                            <div className="text-sm text-purple-300">
                              ✦ ✦ ✦
                            </div>
                          </div>
                        </div>

                        {/* Card Front */}
                        <div className="absolute w-full h-full backface-hidden rotateY-180 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-2 border-purple-500/50 shadow-2xl overflow-hidden">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 animate-pulse-glow" />
                          
                          {/* Card Content */}
                          <div className="relative h-full flex flex-col p-6">
                            {/* Card Number */}
                            <div className="text-right">
                              <span className="text-xs text-purple-300 font-mono">
                                {card.suit === 'major' ? `Major Arcana ${card.number}` : `${card.suit.charAt(0).toUpperCase() + card.suit.slice(1)} ${card.number}`}
                              </span>
                            </div>

                            {/* Card Image */}
                            <div className="flex-1 flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.3 + 0.5, type: 'spring' }}
                                className="text-8xl"
                              >
                                {card.image}
                              </motion.div>
                            </div>

                            {/* Card Name */}
                            <div className="text-center mt-4">
                              <h3 className="text-xl font-bold text-white font-serif">
                                {card.name}
                              </h3>
                              <p className="text-sm text-purple-300 mt-1">
                                {card.keywords.slice(0, 2).join(' • ')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Card Meaning */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 1 }}
                      className="mt-6 text-center max-w-xs"
                    >
                      <p className="text-sm text-muted-foreground">
                        {card.meaning}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Interpretation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-xl">
                  <h2 className="text-2xl font-bold font-serif mb-4 text-center">
                    Your Reading
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {interpretation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        {!cards.length && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-4xl mb-3">🤔</div>
                <h3 className="font-semibold mb-2">1. Ask Your Question</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on what you want to know and enter your question above
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-4xl mb-3">🎴</div>
                <h3 className="font-semibold mb-2">2. Draw Your Cards</h3>
                <p className="text-sm text-muted-foreground">
                  Click the button to draw three cards from the deck
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-card/30">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-semibold mb-2">3. Receive Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Read your interpretation and reflect on the message
                </p>
              </div>
            </div>

            {!user && (
              <div className="p-6 rounded-xl border bg-amber-500/10 border-amber-500/20">
                <p className="text-amber-600 dark:text-amber-400">
                  Please <a href="/login" className="underline font-medium">login</a> to draw cards and save your readings.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
