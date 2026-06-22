import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Palette, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Next.js 16 + React 19',
    description:
      'App Router, Turbopack, Server Components로 빠르고 현대적인 개발 경험을 제공합니다.',
  },
  {
    icon: Palette,
    title: 'shadcn/ui + Tailwind v4',
    description:
      '아름답고 접근성이 뛰어난 컴포넌트 시스템으로 빠르게 UI를 구성하세요.',
  },
  {
    icon: Shield,
    title: 'TypeScript',
    description:
      '완전한 타입 안전성으로 버그를 사전에 방지하고 안정적인 코드베이스를 유지합니다.',
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-6 py-32 px-4 text-center">
        <Badge variant="secondary" className="text-xs font-medium">
          Next.js 16 &middot; React 19 &middot; Tailwind v4
        </Badge>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          빠르게 시작하는
          <br />
          <span className="text-muted-foreground">모던 웹 스타터킷</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션 레디
          스타터킷입니다. 설정 없이 바로 개발을 시작하세요.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">기능 살펴보기</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">포함된 기술 스택</h2>
            <p className="mt-4 text-muted-foreground">
              현대적인 웹 개발에 필요한 모든 것이 이미 준비되어 있습니다
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border/50">
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="mx-auto max-w-xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">지금 바로 시작하세요</h2>
          <p className="text-muted-foreground">
            이 스타터킷을 기반으로 여러분의 프로젝트를 빠르게 구축하세요.
          </p>
          <Button asChild size="lg">
            <Link href="/dashboard">
              대시보드 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
