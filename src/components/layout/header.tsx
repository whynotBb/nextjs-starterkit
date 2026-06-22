import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { SITE_CONFIG, LANDING_NAV_ITEMS } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-sm">
          {SITE_CONFIG.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {LANDING_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
