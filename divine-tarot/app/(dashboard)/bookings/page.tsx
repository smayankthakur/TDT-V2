export default function BookingsPage() {
  const bookings = [
    {
      id: 1,
      type: 'Three Card Spread',
      reader: 'Sarah Mitchell',
      date: '2024-03-18',
      time: '10:00 AM',
      status: 'confirmed',
      price: 24.99,
    },
    {
      id: 2,
      type: 'Celtic Cross',
      reader: 'Michael Chen',
      date: '2024-03-15',
      time: '2:00 PM',
      status: 'completed',
      price: 49.99,
    },
    {
      id: 3,
      type: 'Love Reading',
      reader: 'Emma Rodriguez',
      date: '2024-03-12',
      time: '11:00 AM',
      status: 'completed',
      price: 34.99,
    },
    {
      id: 4,
      type: 'Career Reading',
      reader: 'David Kim',
      date: '2024-03-10',
      time: '3:00 PM',
      status: 'cancelled',
      price: 34.99,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Bookings</h1>
        <p className="text-muted-foreground mt-2">
          View your reading bookings and history
        </p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">{booking.type}</h3>
                <p className="text-sm text-muted-foreground">
                  with {booking.reader}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{booking.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">${booking.price}</p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'confirmed'
                        ? 'bg-blue-100 text-blue-800'
                        : booking.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() +
                      booking.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {booking.status === 'confirmed' && (
              <div className="mt-4 pt-4 border-t flex gap-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-accent transition-colors text-red-600">
                  Cancel Booking
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
