export default function TarotPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif">Tarot Readings</h1>
          <p className="text-xl text-muted-foreground">
            Choose from our selection of tarot reading services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Single Card Reading</h3>
            <p className="text-muted-foreground mb-4">
              Quick insight into your current situation with a single card pull.
            </p>
            <p className="text-2xl font-bold text-primary">$9.99</p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎴</div>
            <h3 className="text-xl font-semibold mb-2">Three Card Spread</h3>
            <p className="text-muted-foreground mb-4">
              Past, present, and future guidance for your journey.
            </p>
            <p className="text-2xl font-bold text-primary">$24.99</p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Celtic Cross</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive 10-card reading for deep life insights.
            </p>
            <p className="text-2xl font-bold text-primary">$49.99</p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-xl font-semibold mb-2">Love Reading</h3>
            <p className="text-muted-foreground mb-4">
              Specialized reading for relationship and love matters.
            </p>
            <p className="text-2xl font-bold text-primary">$34.99</p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Career Reading</h3>
            <p className="text-muted-foreground mb-4">
              Guidance for professional growth and career decisions.
            </p>
            <p className="text-2xl font-bold text-primary">$34.99</p>
          </div>

          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold mb-2">Live Session</h3>
            <p className="text-muted-foreground mb-4">
              One-on-one live reading session with a certified reader.
            </p>
            <p className="text-2xl font-bold text-primary">$79.99</p>
          </div>
        </div>
      </div>
    </div>
  )
}
