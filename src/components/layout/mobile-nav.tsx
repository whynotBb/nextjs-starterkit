'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { NavLink } from './nav-link'

export function MobileNav() {
  const [open, setOpen] = useState(false)

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
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} onClick={() => setOpen(false)} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
