export interface NavItem {
  title: string
  href: string
  icon?: string
  disabled?: boolean
  external?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
}

export type Theme = 'light' | 'dark' | 'system'
