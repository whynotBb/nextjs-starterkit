import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* 좌측 브랜드 패널 (데스크탑 전용) */}
      <div className="relative hidden flex-col justify-between bg-muted p-10 lg:flex lg:w-[480px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            N
          </div>
          <span className="font-semibold">{SITE_CONFIG.name}</span>
        </Link>
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;개발을 시작하는 가장 빠른 방법은 이미 검증된 스타터킷을 활용하는 것입니다.&rdquo;
          </p>
          <footer className="text-sm text-muted-foreground">Next Starter Team</footer>
        </blockquote>
      </div>

      {/* 우측 폼 영역 */}
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* 모바일에서만 보이는 로고 */}
          <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              N
            </div>
            <span className="font-semibold">{SITE_CONFIG.name}</span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  )
}
