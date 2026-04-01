import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 text-center">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-serif">
            Welcome to{' '}
            <span className="text-primary">Divine Tarot</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with certified tarot readers and get AI-powered spiritual guidance.
            Experience personalized readings, live sessions, and spiritual products.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/tarot">Get a Reading</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link href="/ai-guide">Try AI Guide</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="p-6 rounded-lg border bg-card">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold mb-2">Live Readings</h3>
            <p className="text-muted-foreground">
              Connect with certified tarot readers for personalized live sessions.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">AI Guidance</h3>
            <p className="text-muted-foreground">
              Get instant spiritual guidance powered by advanced AI technology.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <div className="text-4xl mb-4">🎴</div>
            <h3 className="text-xl font-semibold mb-2">Spiritual Store</h3>
            <p className="text-muted-foreground">
              Browse our collection of tarot decks, crystals, and spiritual items.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
