'use client'

import Link from 'next/link'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NavLink } from './nav-link'

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border bg-sidebar min-h-screen">
      <div className="flex h-14 items-center border-b border-border px-4">
        <Link href="/" className="font-semibold text-sm text-sidebar-foreground">
          {SITE_CONFIG.name}
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  )
}
