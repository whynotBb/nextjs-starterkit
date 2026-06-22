'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User, Settings, LogOut, CreditCard } from 'lucide-react'
import Link from 'next/link'

interface UserNavProps {
  user?: {
    name?: string
    email?: string
    image?: string
  }
}

export function UserNav({ user }: UserNavProps) {
  const name = user?.name ?? '사용자'
  const email = user?.email ?? ''
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full outline-none ring-ring focus-visible:ring-2">
          <Avatar className="h-8 w-8">
            {user?.image && <AvatarImage src={user.image} alt={name} />}
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium">{name}</span>
            {email && <span className="text-xs text-muted-foreground">{email}</span>}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/settings">
            <User className="mr-2 h-4 w-4" />
            프로필
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">
            <Settings className="mr-2 h-4 w-4" />
            설정
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          결제
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
