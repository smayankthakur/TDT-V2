'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function WalletPage() {
  const [balance] = useState(150.0)
  const [amount, setAmount] = useState('')

  const transactions = [
    {
      id: 1,
      type: 'deposit',
      description: 'Wallet top-up via Razorpay',
      amount: 100.0,
      date: '2024-03-15',
      status: 'completed',
    },
    {
      id: 2,
      type: 'withdrawal',
      description: 'Three Card Spread reading',
      amount: -24.99,
      date: '2024-03-14',
      status: 'completed',
    },
    {
      id: 3,
      type: 'withdrawal',
      description: 'Live session with Reader Sarah',
      amount: -79.99,
      date: '2024-03-12',
      status: 'completed',
    },
    {
      id: 4,
      type: 'deposit',
      description: 'Referral bonus',
      amount: 25.0,
      date: '2024-03-10',
      status: 'completed',
    },
  ]

  const handleAddFunds = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount')
      return
    }
    alert(`Adding $${amount} to your wallet`)
    setAmount('')
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Wallet</h1>
        <p className="text-muted-foreground mt-2">
          Manage your funds and view transaction history
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-4">Add Funds</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount (USD)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  step="0.01"
                  className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter amount"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map((preset) => (
                  <Button
                    key={preset}
                    variant="outline"
                    onClick={() => setAmount(preset.toString())}
                  >
                    ${preset}
                  </Button>
                ))}
              </div>
              <Button onClick={handleAddFunds} className="w-full">
                Add Funds
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`font-semibold ${
                        transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {transaction.amount >= 0 ? '+' : ''}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </span>
                    <p className="text-xs text-muted-foreground capitalize">
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-card text-center">
            <p className="text-sm text-muted-foreground mb-2">Current Balance</p>
            <p className="text-4xl font-bold text-primary">${balance.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mt-2">Available for use</p>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-background">
                <div className="text-2xl">💳</div>
                <div>
                  <p className="font-medium">Razorpay</p>
                  <p className="text-sm text-muted-foreground">
                    Credit/Debit Cards, UPI
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-background">
                <div className="text-2xl">🅿️</div>
                <div>
                  <p className="font-medium">PayPal</p>
                  <p className="text-sm text-muted-foreground">
                    PayPal Balance, Bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
