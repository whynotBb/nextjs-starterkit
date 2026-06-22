'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, LayoutDashboard, Settings, LayoutGrid } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'

const iconMap = {
  LayoutDashboard,
  Settings,
  LayoutGrid,
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-60 p-0 bg-sidebar">
        <div className="flex h-14 items-center border-b border-border px-4">
          <Link
            href="/"
            className="font-semibold text-sm text-sidebar-foreground"
            onClick={() => setOpen(false)}
          >
            {SITE_CONFIG.name}
          </Link>
        </div>
        <nav className="p-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
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
      </SheetContent>
    </Sheet>
  )
}
