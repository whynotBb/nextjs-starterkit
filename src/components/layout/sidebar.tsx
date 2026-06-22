'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Settings, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { ScrollArea } from '@/components/ui/scroll-area'

const iconMap = {
  LayoutDashboard,
  Settings,
  LayoutGrid,
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border bg-sidebar min-h-screen">
      <div className="flex h-14 items-center border-b border-border px-4">
        <Link href="/" className="font-semibold text-sm text-sidebar-foreground">
          {SITE_CONFIG.name}
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                {item.title}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </aside>
  )
}
