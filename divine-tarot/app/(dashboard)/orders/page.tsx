export default function OrdersPage() {
  const orders = [
    {
      id: 'ORD-001',
      items: [
        { name: 'Rider-Waite Tarot Deck', quantity: 1, price: 29.99 },
        { name: 'Mystic Crystal Set', quantity: 1, price: 49.99 },
      ],
      total: 79.98,
      date: '2024-03-15',
      status: 'delivered',
    },
    {
      id: 'ORD-002',
      items: [{ name: 'Tarot Guidebook', quantity: 2, price: 19.99 }],
      total: 39.98,
      date: '2024-03-10',
      status: 'shipped',
    },
    {
      id: 'ORD-003',
      items: [{ name: 'Meditation Incense', quantity: 3, price: 14.99 }],
      total: 44.97,
      date: '2024-03-05',
      status: 'processing',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Orders</h1>
        <p className="text-muted-foreground mt-2">
          View your order history and track shipments
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-lg">Order {order.id}</h3>
                <p className="text-sm text-muted-foreground">{order.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'delivered'
                      ? 'bg-green-100 text-green-800'
                      : order.status === 'shipped'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <span className="font-semibold text-lg">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t flex gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                View Details
              </button>
              {order.status === 'delivered' && (
                <button className="px-4 py-2 border rounded-md hover:bg-accent transition-colors">
                  Leave Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
