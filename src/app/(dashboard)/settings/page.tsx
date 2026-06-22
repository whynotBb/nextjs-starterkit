'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { profileSchema, notificationsSchema, type ProfileFormValues, type NotificationsFormValues } from '@/lib/validations/settings'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { LoadingButton } from '@/components/composite/loading-button'
import { PageHeader } from '@/components/composite/page-header'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/composite/confirm-dialog'

function ProfileTab() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: '홍길동', email: 'user@example.com', bio: '' },
  })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 1000))
    toast.success('프로필이 업데이트되었습니다')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>프로필</CardTitle>
        <CardDescription>공개 프로필 정보를 관리합니다</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>소개</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="자신을 소개해주세요 (최대 160자)"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    프로필에 표시되는 짧은 소개입니다
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <LoadingButton
                type="submit"
                isPending={form.formState.isSubmitting}
                pendingText="저장 중..."
              >
                변경사항 저장
              </LoadingButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function AccountTab() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>비밀번호 변경</CardTitle>
          <CardDescription>계정 보안을 위해 주기적으로 변경해주세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">현재 비밀번호</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">새 비밀번호</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">새 비밀번호 확인</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div className="flex justify-end">
            <Button onClick={() => toast.success('비밀번호가 변경되었습니다')}>
              비밀번호 변경
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">위험 구역</CardTitle>
          <CardDescription>돌이킬 수 없는 작업이 포함됩니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">계정 삭제</p>
              <p className="text-sm text-muted-foreground">
                계정과 모든 데이터가 영구적으로 삭제됩니다
              </p>
            </div>
            <ConfirmDialog
              trigger={<Button variant="destructive" size="sm">계정 삭제</Button>}
              title="정말 계정을 삭제하시겠습니까?"
              description="이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다."
              confirmLabel="삭제"
              variant="destructive"
              onConfirm={() => toast.error('계정이 삭제되었습니다')}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationsTab() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsSchema),
    defaultValues: {
      emailNotifications: true,
      pushNotifications: false,
      marketingEmails: false,
      securityAlerts: true,
    },
  })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 800))
    toast.success('알림 설정이 저장되었습니다')
  }

  const notifications = [
    { name: 'emailNotifications' as const, label: '이메일 알림', description: '중요한 업데이트를 이메일로 받습니다' },
    { name: 'pushNotifications' as const, label: '푸시 알림', description: '브라우저 푸시 알림을 받습니다' },
    { name: 'marketingEmails' as const, label: '마케팅 이메일', description: '새 기능 및 프로모션 정보를 받습니다' },
    { name: 'securityAlerts' as const, label: '보안 알림', description: '계정 보안 관련 알림을 받습니다' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>원하는 알림 유형을 선택하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {notifications.map((item, index) => (
                <div key={item.name}>
                  <FormField
                    control={form.control}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between">
                        <div>
                          <FormLabel className="font-medium">{item.label}</FormLabel>
                          <FormDescription>{item.description}</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {index < notifications.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <LoadingButton
                type="submit"
                isPending={form.formState.isSubmitting}
                pendingText="저장 중..."
              >
                설정 저장
              </LoadingButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function AppearanceTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>외관</CardTitle>
        <CardDescription>테마와 화면 표시 방식을 설정합니다</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm">테마</p>
            <p className="text-sm text-muted-foreground">라이트 / 다크 / 시스템 테마를 선택합니다</p>
          </div>
          <ThemeToggle />
        </div>
      </CardContent>
    </Card>
  )
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="설정"
        description="계정 및 애플리케이션 설정을 관리합니다"
      />
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="account">계정</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
          <TabsTrigger value="appearance">외관</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="profile"><ProfileTab /></TabsContent>
          <TabsContent value="account"><AccountTab /></TabsContent>
          <TabsContent value="notifications"><NotificationsTab /></TabsContent>
          <TabsContent value="appearance"><AppearanceTab /></TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
