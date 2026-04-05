'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-white mb-4">404</h2>
        <p className="text-xl text-purple-200 mb-6">Page not found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}