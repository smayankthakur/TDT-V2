export default function StorePage() {
  const products = [
    {
      id: 1,
      name: 'Rider-Waite Tarot Deck',
      description: 'Classic tarot deck perfect for beginners and experts alike.',
      price: 29.99,
      image: '🎴',
    },
    {
      id: 2,
      name: 'Mystic Crystal Set',
      description: 'Curated collection of healing crystals for spiritual practice.',
      price: 49.99,
      image: '💎',
    },
    {
      id: 3,
      name: 'Tarot Guidebook',
      description: 'Comprehensive guide to tarot card meanings and spreads.',
      price: 19.99,
      image: '📖',
    },
    {
      id: 4,
      name: 'Meditation Incense',
      description: 'Premium incense sticks for meditation and cleansing.',
      price: 14.99,
      image: '🕯️',
    },
    {
      id: 5,
      name: 'Crystal Ball',
      description: 'Handcrafted crystal ball for scrying and meditation.',
      price: 89.99,
      image: '🔮',
    },
    {
      id: 6,
      name: 'Spiritual Journal',
      description: 'Beautiful journal for recording your spiritual journey.',
      price: 24.99,
      image: '📓',
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif">Spiritual Store</h1>
          <p className="text-xl text-muted-foreground">
            Browse our collection of tarot decks, crystals, and spiritual items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
