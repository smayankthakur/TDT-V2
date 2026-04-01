export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-primary">Divine Tarot</span>
        </h1>

        <p className="mt-3 text-2xl">
          AI-Powered Spiritual Guidance Platform
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/tarot"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-primary focus:border-primary"
          >
            <h3 className="text-2xl font-bold">Tarot Readings &rarr;</h3>
            <p className="mt-4 text-xl">
              Get personalized tarot readings from certified readers.
            </p>
          </a>

          <a
            href="/ai-guide"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-primary focus:border-primary"
          >
            <h3 className="text-2xl font-bold">AI Guide &rarr;</h3>
            <p className="mt-4 text-xl">
              Experience AI-powered spiritual guidance instantly.
            </p>
          </a>

          <a
            href="/store"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-primary focus:border-primary"
          >
            <h3 className="text-2xl font-bold">Spiritual Store &rarr;</h3>
            <p className="mt-4 text-xl">
              Shop curated spiritual products and accessories.
            </p>
          </a>

          <a
            href="/dashboard"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-primary focus:border-primary"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage your sessions, bookings, and wallet.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
