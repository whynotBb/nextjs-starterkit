export type NavIconKey = 'LayoutDashboard' | 'Settings' | 'LayoutGrid'

export interface NavItem {
  title: string
  href: string
  icon?: NavIconKey
  disabled?: boolean
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
}

export type Theme = 'light' | 'dark' | 'system'
