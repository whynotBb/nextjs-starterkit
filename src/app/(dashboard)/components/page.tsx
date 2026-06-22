import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import {
  AlertCircle,
  Info,
  CheckCircle,
  Trash2,
  Download,
  Mail,
  Settings,
  Plus,
} from 'lucide-react'
import { DialogDemo } from './_components/dialog-demo'
import { AlertDialogDemo } from './_components/alert-dialog-demo'
import { DropdownDemo } from './_components/dropdown-demo'

const tableData = [
  { name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
  { name: '김철수', email: 'kim@example.com', role: '편집자', status: '활성' },
  { name: '이영희', email: 'lee@example.com', role: '뷰어', status: '비활성' },
  { name: '박민준', email: 'park@example.com', role: '편집자', status: '활성' },
]

function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="pb-5 border-b border-border space-y-1.5">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
      {children}
    </p>
  )
}

export default function ComponentsPage() {
  return (
    <div className="space-y-4 max-w-4xl">
      <div className="pb-2">
        <h1 className="text-2xl font-bold tracking-tight">컴포넌트</h1>
        <p className="mt-1 text-muted-foreground">
          shadcn/ui 기반 공통 컴포넌트 예제 모음입니다.
        </p>
      </div>

      {/* ── 버튼 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="버튼 (Button)"
          description="다양한 variant와 size를 제공하는 버튼 컴포넌트"
        />
        <div className="space-y-5">
          <div className="space-y-2.5">
            <SubLabel>Variant</SubLabel>
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <div className="space-y-2.5">
            <SubLabel>Size</SubLabel>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="xs">XSmall</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div className="space-y-2.5">
            <SubLabel>Icon &amp; State</SubLabel>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="icon" variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button disabled>비활성화</Button>
              <Button variant="outline" disabled>
                비활성화
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 폼 입력 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="폼 입력 (Form Inputs)"
          description="Input, Textarea, Select, Checkbox, Switch 등 폼 관련 컴포넌트"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {/* 왼쪽 열 */}
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="default-input">기본 입력</Label>
              <Input id="default-input" placeholder="텍스트를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">비활성 입력</Label>
              <Input id="disabled-input" value="비활성 상태" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-input">이메일</Label>
              <Input
                id="email-input"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-input">비밀번호</Label>
              <Input
                id="password-input"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          {/* 오른쪽 열 */}
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="textarea">메모</Label>
              <Textarea
                id="textarea"
                placeholder="내용을 입력하세요..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>역할 선택</Label>
              <Select defaultValue="editor">
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">관리자</SelectItem>
                  <SelectItem value="editor">편집자</SelectItem>
                  <SelectItem value="viewer">뷰어</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
                Checkbox
              </Label>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Checkbox id="check1" defaultChecked />
                  <Label htmlFor="check1">이메일 알림 받기</Label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox id="check2" />
                  <Label htmlFor="check2">SMS 알림 받기</Label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox id="check3" disabled />
                  <Label htmlFor="check3" className="text-muted-foreground">
                    비활성 체크박스
                  </Label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
                Switch
              </Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="switch1">알림 활성화</Label>
                  <Switch id="switch1" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="switch2">다크 모드</Label>
                  <Switch id="switch2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 피드백 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="피드백 (Feedback)"
          description="Badge, Alert, Progress, Skeleton 등 상태 표시 컴포넌트"
        />
        <div className="space-y-6">
          <div className="space-y-2.5">
            <SubLabel>Badge</SubLabel>
            <div className="flex flex-wrap gap-2.5">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="space-y-2.5">
            <SubLabel>Alert</SubLabel>
            <div className="space-y-3">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>안내</AlertTitle>
                <AlertDescription>
                  새로운 버전이 출시되었습니다. 지금 업데이트하세요.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>오류</AlertTitle>
                <AlertDescription>
                  요청을 처리하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div className="space-y-2.5">
            <SubLabel>Progress</SubLabel>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>업로드 진행률</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>

          <div className="space-y-2.5">
            <SubLabel>Skeleton</SubLabel>
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/30">
              <Skeleton className="h-12 w-12 rounded-full shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 오버레이 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="오버레이 (Overlay)"
          description="Dialog, AlertDialog, Popover, Tooltip"
        />
        <div className="space-y-6">
          <div className="space-y-2.5">
            <SubLabel>Dialog</SubLabel>
            <DialogDemo />
          </div>
          <div className="space-y-2.5">
            <SubLabel>AlertDialog</SubLabel>
            <AlertDialogDemo />
          </div>
          <div className="space-y-2.5">
            <SubLabel>Popover &amp; Tooltip</SubLabel>
            <div className="flex flex-wrap gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">팝오버 열기</Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">팝오버 제목</h4>
                    <p className="text-sm text-muted-foreground">
                      팝오버는 트리거 요소 근처에 추가 콘텐츠를 표시합니다.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>툴팁 내용입니다</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* ── 레이아웃 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="레이아웃 (Layout)"
          description="Card, Tabs, Accordion 컴포넌트"
        />
        <div className="space-y-8">
          <div className="space-y-2.5">
            <SubLabel>Card</SubLabel>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>기본 카드</CardTitle>
                  <CardDescription>카드 설명 텍스트입니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    카드 본문 영역입니다. 다양한 콘텐츠를 담을 수 있습니다.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm">확인</Button>
                  <Button size="sm" variant="outline">
                    취소
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>알림 설정</CardTitle>
                      <CardDescription>알림 수신 방법을 설정합니다.</CardDescription>
                    </div>
                    <Badge variant="secondary">설정</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">이메일 알림</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">푸시 알림</span>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          <div className="space-y-2.5">
            <SubLabel>Tabs</SubLabel>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
                <TabsTrigger value="settings">설정</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-3">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      개요 탭 내용입니다. 서비스의 전반적인 현황을 확인할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-3">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      분석 탭 내용입니다. 사용자 행동 데이터를 분석합니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-3">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      설정 탭 내용입니다. 서비스 설정을 변경할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <Separator />

          <div className="space-y-2.5">
            <SubLabel>Accordion</SubLabel>
            <Accordion
              type="single"
              collapsible
              className="border rounded-lg px-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>컴포넌트 설치 방법</AccordionTrigger>
                <AccordionContent>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    npx shadcn@latest add [컴포넌트명]
                  </code>
                  <p className="mt-2 text-muted-foreground">
                    위 명령어로 필요한 컴포넌트를 개별 설치할 수 있습니다.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Tailwind CSS v4 사용법</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Tailwind CSS v4는 CSS 파일에서 직접 임포트하여 사용합니다.
                    별도의 설정 파일 없이 자동으로 감지됩니다.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>다크 모드 적용 방법</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    우측 상단의 테마 토글 버튼으로 라이트/다크/시스템 모드를
                    전환할 수 있습니다. 선택한 테마는 localStorage에 저장됩니다.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── 데이터 표시 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="데이터 표시 (Data Display)"
          description="Table, Avatar 컴포넌트"
        />
        <div className="space-y-8">
          <div className="space-y-2.5">
            <SubLabel>Avatar</SubLabel>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2.5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="사용자" />
                  <AvatarFallback>홍</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">홍길동</span>
              </div>
              <Avatar>
                <AvatarFallback>김</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>이</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  박
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Separator />

          <div className="space-y-2.5">
            <SubLabel>Table</SubLabel>
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableCaption>사용자 목록</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className="text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.email}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.email}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {row.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            row.status === '활성' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-1 justify-end">
                          <Button size="icon-sm" variant="ghost">
                            <Settings className="h-3.5 w-3.5" />
                          </Button>
                          <Button
                            size="icon-sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={4}>총 사용자</TableCell>
                    <TableCell className="text-right">
                      {tableData.length}명
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 드롭다운 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="드롭다운 (Dropdown Menu)"
          description="DropdownMenu 컴포넌트 예제"
        />
        <DropdownDemo />
      </section>

      {/* ── 실용 예제 ── */}
      <section className="rounded-xl border border-border bg-card p-6 space-y-6">
        <SectionHeader
          title="실용 예제"
          description="자주 사용되는 버튼 + 아이콘 조합"
        />
        <div className="flex flex-wrap gap-3">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            새로 만들기
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            내보내기
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            이메일 보내기
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            삭제
          </Button>
          <Button variant="ghost">
            <CheckCircle className="mr-2 h-4 w-4" />
            완료 표시
          </Button>
        </div>
      </section>
    </div>
  )
}
