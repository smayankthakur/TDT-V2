'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

interface Reading {
  id: string
  question: string
  cards: Array<{
    id: number
    name: string
    suit: string
    meaning: string
    image: string
  }>
  interpretation: string
  created_at: string
}

export default function DashboardPage() {
  const { user } = useAuth()
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)

  const fetchReadings = async (pageNum: number = 0, searchTerm: string = '') => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        limit: '5',
        offset: (pageNum * 5).toString(),
      })

      if (searchTerm) {
        params.append('search', searchTerm)
      }

      const response = await fetch(`/api/v1/readings?${params}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch readings')
      }

      if (pageNum === 0) {
        setReadings(data.data.readings)
      } else {
        setReadings((prev) => [...prev, ...data.data.readings])
      }

      setHasMore(data.data.pagination.hasMore)
      setTotal(data.data.pagination.total)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      fetchReadings(0, search)
    }
  }, [user, search])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(0)
  }

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    fetchReadings(nextPage, search)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Login</h1>
          <p className="text-muted-foreground mb-6">
            You need to be logged in to view your dashboard.
          </p>
          <Button asChild>
            <a href="/login">Login</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold font-serif">Your Readings</h1>
          <p className="text-muted-foreground">
            View your past tarot readings and insights
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary">{total}</div>
            <div className="text-sm text-muted-foreground">Total Readings</div>
          </div>
          <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary">
              {readings.length > 0 ? readings[0].cards.length : 0}
            </div>
            <div className="text-sm text-muted-foreground">Cards per Reading</div>
          </div>
          <div className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary">
              {readings.length > 0 ? formatDate(readings[0].created_at).split(',')[0] : 'N/A'}
            </div>
            <div className="text-sm text-muted-foreground">Last Reading</div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search your readings..."
              value={search}
              onChange={handleSearch}
              className="w-full px-4 py-3 pl-12 rounded-xl border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button asChild className="h-12">
            <a href="/tarot">New Reading</a>
          </Button>
        </motion.div>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"
          >
            {error}
          </motion.div>
        )}

        {/* Readings List */}
        <div className="space-y-4">
          <AnimatePresence>
            {readings.map((reading, index) => (
              <motion.div
                key={reading.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Cards */}
                  <div className="flex-shrink-0">
                    <div className="flex gap-2">
                      {reading.cards.map((card, cardIndex) => (
                        <div
                          key={cardIndex}
                          className="w-16 h-24 rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-500/30 flex items-center justify-center text-2xl shadow-lg"
                        >
                          {card.image}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {truncateText(reading.question, 100)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(reading.created_at)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {reading.cards.map((card, cardIndex) => (
                          <span
                            key={cardIndex}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {card.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {truncateText(reading.interpretation, 200)}
                    </p>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Full Reading
                      </Button>
                      <Button variant="ghost" size="sm">
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {!loading && readings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🎴</div>
              <h3 className="text-xl font-semibold mb-2">No Readings Yet</h3>
              <p className="text-muted-foreground mb-6">
                {search
                  ? 'No readings match your search. Try a different term.'
                  : 'Start your spiritual journey by getting your first tarot reading.'}
              </p>
              {!search && (
                <Button asChild>
                  <a href="/tarot">Get Your First Reading</a>
                </Button>
              )}
            </motion.div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Load More */}
          {!loading && hasMore && readings.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center pt-4"
            >
              <Button variant="outline" onClick={handleLoadMore}>
                Load More Readings
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
