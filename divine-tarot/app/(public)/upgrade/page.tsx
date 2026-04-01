'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'

interface Plan {
  id: string
  name: string
  price: number
  priceId: string
  readingsPerMonth: number
  features: string[]
}

export default function UpgradePage() {
  const { user } = useAuth()
  const [plans, setPlans] = useState<Plan[]>([])
  const [currentPlan, setCurrentPlan] = useState<string>('free')
  const [readingsThisMonth, setReadingsThisMonth] = useState(0)
  const [loading, setLoading] = useState(true)
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null)

  useEffect(() => {
    fetchSubscription()
  }, [user])

  const fetchSubscription = async () => {
    try {
      const response = await fetch('/api/v1/subscriptions')
      const data = await response.json()

      if (response.ok) {
        setPlans(data.data.availablePlans)
        setCurrentPlan(data.data.subscription.plan_id)
        setReadingsThisMonth(data.data.readingsThisMonth)
      }
    } catch (error) {
      console.error('Error fetching subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCheckout = async (planId: string) => {
    if (!user) {
      window.location.href = '/login'
      return
    }

    setCheckoutLoading(planId)

    try {
      const response = await fetch('/api/v1/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId }),
      })

      const data = await response.json()

      if (response.ok && data.data.url) {
        window.location.href = data.data.url
      } else {
        alert('Failed to create checkout session')
      }
    } catch (error) {
      console.error('Error creating checkout:', error)
      alert('An error occurred')
    } finally {
      setCheckoutLoading(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
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
            Upgrade Your Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Unlock unlimited readings and premium features
          </motion.p>
        </div>

        {/* Current Usage */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Current Plan: {currentPlan.toUpperCase()}</h3>
                  <p className="text-sm text-muted-foreground">
                    {readingsThisMonth} readings this month
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {currentPlan === 'free' ? '3' : '∞'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {currentPlan === 'free' ? 'readings/month' : 'unlimited'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-all ${
                currentPlan === plan.id
                  ? 'border-primary bg-primary/10 shadow-xl'
                  : plan.id === 'pro'
                  ? 'border-purple-500 bg-purple-500/10 shadow-xl scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.id === 'pro' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="space-y-1">
                  <div className="text-4xl font-bold">
                    ${plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  {plan.price === 0 && (
                    <p className="text-sm text-muted-foreground">Free forever</p>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {currentPlan === plan.id ? (
                  <Button disabled className="w-full">
                    Current Plan
                  </Button>
                ) : plan.price === 0 ? (
                  <Button variant="outline" className="w-full" disabled>
                    Free Plan
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleCheckout(plan.id)}
                    disabled={checkoutLoading === plan.id}
                    className="w-full"
                  >
                    {checkoutLoading === plan.id ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
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
                        Processing...
                      </span>
                    ) : (
                      `Upgrade to ${plan.name}`
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-serif text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border bg-card/50">
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card/50">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards through Stripe, including Visa, Mastercard, and American Express.
              </p>
            </div>
            <div className="p-6 rounded-xl border bg-card/50">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! The Free plan gives you 3 readings per month with no credit card required. Upgrade anytime for unlimited access.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
