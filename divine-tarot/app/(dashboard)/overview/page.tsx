export default function DashboardOverviewPage() {
  const stats = [
    { name: 'Total Readings', value: '12', icon: '🎴' },
    { name: 'Wallet Balance', value: '$150.00', icon: '💰' },
    { name: 'Upcoming Sessions', value: '3', icon: '📅' },
    { name: 'Favorite Readers', value: '5', icon: '⭐' },
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'reading',
      description: 'Three Card Spread reading completed',
      date: '2 hours ago',
      amount: '-$24.99',
    },
    {
      id: 2,
      type: 'deposit',
      description: 'Wallet top-up via Razorpay',
      date: '1 day ago',
      amount: '+$100.00',
    },
    {
      id: 3,
      type: 'session',
      description: 'Live session with Reader Sarah',
      date: '3 days ago',
      amount: '-$79.99',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's an overview of your activity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.description}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                <span
                  className={`font-semibold ${
                    activity.amount.startsWith('+')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 rounded-lg border bg-background hover:bg-accent transition-colors text-left">
              <div className="text-2xl mb-2">🎴</div>
              <p className="font-medium">Get Reading</p>
              <p className="text-sm text-muted-foreground">Start a new reading</p>
            </button>
            <button className="p-4 rounded-lg border bg-background hover:bg-accent transition-colors text-left">
              <div className="text-2xl mb-2">📅</div>
              <p className="font-medium">Book Session</p>
              <p className="text-sm text-muted-foreground">Schedule live session</p>
            </button>
            <button className="p-4 rounded-lg border bg-background hover:bg-accent transition-colors text-left">
              <div className="text-2xl mb-2">💰</div>
              <p className="font-medium">Add Funds</p>
              <p className="text-sm text-muted-foreground">Top up wallet</p>
            </button>
            <button className="p-4 rounded-lg border bg-background hover:bg-accent transition-colors text-left">
              <div className="text-2xl mb-2">✨</div>
              <p className="font-medium">AI Guide</p>
              <p className="text-sm text-muted-foreground">Ask AI anything</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
