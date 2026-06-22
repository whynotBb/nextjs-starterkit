import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex h-14 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy; 2026 {SITE_CONFIG.name}. Built with Next.js &amp; shadcn/ui
        </p>
      </div>
    </footer>
  )
}
