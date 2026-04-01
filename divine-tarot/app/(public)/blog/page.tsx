export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Understanding the Major Arcana',
      excerpt:
        'Discover the deep meanings behind the 22 Major Arcana cards and how they represent life\'s spiritual journey.',
      date: 'March 15, 2024',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'How to Cleanse Your Tarot Deck',
      excerpt:
        'Learn various methods to cleanse and charge your tarot deck for accurate readings.',
      date: 'March 10, 2024',
      readTime: '5 min read',
    },
    {
      id: 3,
      title: 'The Power of Crystal Healing',
      excerpt:
        'Explore how different crystals can enhance your spiritual practice and daily life.',
      date: 'March 5, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Tarot for Beginners: Where to Start',
      excerpt:
        'A comprehensive guide for those just beginning their tarot journey.',
      date: 'February 28, 2024',
      readTime: '10 min read',
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-serif">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, guides, and spiritual wisdom
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <span className="text-primary font-medium hover:underline">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
