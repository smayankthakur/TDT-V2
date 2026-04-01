'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sidebarNav = [
  { name: 'Overview', href: '/overview', icon: '📊' },
  { name: 'Profile', href: '/profile', icon: '👤' },
  { name: 'Wallet', href: '/wallet', icon: '💰' },
  { name: 'Sessions', href: '/sessions', icon: '📅' },
  { name: 'Bookings', href: '/bookings', icon: '🎴' },
  { name: 'Favorites', href: '/favorites', icon: '⭐' },
  { name: 'Orders', href: '/orders', icon: '📦' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {sidebarNav.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  )
}
