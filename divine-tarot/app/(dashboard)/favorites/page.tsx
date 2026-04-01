export default function FavoritesPage() {
  const favoriteReaders = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      specialty: 'Love & Relationships',
      rating: 4.9,
      reviews: 156,
      price: 79.99,
      avatar: '👩',
    },
    {
      id: 2,
      name: 'Michael Chen',
      specialty: 'Career & Finance',
      rating: 4.8,
      reviews: 203,
      price: 79.99,
      avatar: '👨',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      specialty: 'Spiritual Growth',
      rating: 4.9,
      reviews: 189,
      price: 79.99,
      avatar: '👩',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif">Favorites</h1>
        <p className="text-muted-foreground mt-2">
          Your favorite tarot readers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteReaders.map((reader) => (
          <div
            key={reader.id}
            className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-4xl">
                {reader.avatar}
              </div>
              <h3 className="font-semibold text-lg">{reader.name}</h3>
              <p className="text-sm text-muted-foreground">{reader.specialty}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating</span>
                <span className="font-medium">
                  ⭐ {reader.rating} ({reader.reviews})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price</span>
                <span className="font-medium">${reader.price}/session</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Book Now
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-accent transition-colors text-red-600">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
