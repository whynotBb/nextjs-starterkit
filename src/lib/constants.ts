import type { NavItem, SiteConfig } from '@/types'

export const SITE_CONFIG: SiteConfig = {
  name: 'Next Starter',
  description: '모던 웹 개발을 빠르게 시작하는 Next.js 스타터킷',
  url: 'https://example.com',
}

export const NAV_ITEMS: NavItem[] = [
  { title: '대시보드', href: '/dashboard', icon: 'LayoutDashboard' },
  { title: '컴포넌트', href: '/components', icon: 'LayoutGrid' },
  { title: '설정', href: '/settings', icon: 'Settings' },
]

export const LANDING_NAV_ITEMS: NavItem[] = [
  { title: '기능', href: '#features' },
  { title: '대시보드', href: '/dashboard' },
]
