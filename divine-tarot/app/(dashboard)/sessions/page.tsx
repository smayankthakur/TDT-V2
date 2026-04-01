export default function SessionsPage() {
  const sessions = [
    {
      id: 1,
      reader: 'Sarah Mitchell',
      type: 'Live Reading',
      date: '2024-03-20',
      time: '3:00 PM',
      duration: '30 min',
      status: 'upcoming',
      price: 79.99,
    },
    {
      id: 2,
      reader: 'Michael Chen',
      type: 'Live Reading',
      date: '2024-03-15',
      time: '2:00 PM',
      duration: '30 min',
      status: 'completed',
      price: 79.99,
    },
    {
      id: 3,
      reader: 'Emma Rodriguez',
      type: 'Live Reading',
      date: '2024-03-10',
      time: '4:00 PM',
      duration: '30 min',
      status: 'completed',
      price: 79.99,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Sessions</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your live reading sessions
        </p>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h3 className="font-semibold">{session.reader}</h3>
                  <p className="text-sm text-muted-foreground">{session.type}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{session.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{session.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{session.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">${session.price}</p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      session.status === 'upcoming'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {session.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>
              </div>
            </div>

            {session.status === 'upcoming' && (
              <div className="mt-4 pt-4 border-t flex gap-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Join Session
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-accent transition-colors">
                  Reschedule
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-accent transition-colors text-red-600">
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
