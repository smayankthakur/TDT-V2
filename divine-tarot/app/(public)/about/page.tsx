export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif">About Divine Tarot</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in spiritual guidance and self-discovery
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Divine Tarot was founded with a simple yet profound mission: to make
              spiritual guidance accessible to everyone. We believe that everyone
              deserves access to the wisdom of the tarot, whether through
              traditional readings with certified readers or through the innovative
              use of AI technology.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">Live Readings</h3>
                <p className="text-muted-foreground">
                  Connect with our community of certified tarot readers for
                  personalized, one-on-one live sessions. Each reader brings their
                  unique expertise and intuition to help guide you.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">AI Guidance</h3>
                <p className="text-muted-foreground">
                  Our advanced AI tarot guide is available 24/7 to provide instant
                  spiritual guidance. Perfect for quick questions or when you need
                  immediate insight.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">Spiritual Store</h3>
                <p className="text-muted-foreground">
                  Browse our carefully curated collection of tarot decks, crystals,
                  and spiritual items to enhance your practice and daily life.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">Educational Content</h3>
                <p className="text-muted-foreground">
                  Learn and grow with our blog, guides, and resources designed to
                  deepen your understanding of tarot and spiritual practices.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✦</span>
                <span>
                  <strong className="text-foreground">Authenticity:</strong> We
                  prioritize genuine connections and honest guidance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✦</span>
                <span>
                  <strong className="text-foreground">Accessibility:</strong>{' '}
                  Spiritual guidance should be available to everyone, regardless of
                  background or location.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✦</span>
                <span>
                  <strong className="text-foreground">Innovation:</strong> We
                  embrace technology to enhance traditional spiritual practices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✦</span>
                <span>
                  <strong className="text-foreground">Community:</strong> We foster
                  a supportive community of seekers and readers.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
