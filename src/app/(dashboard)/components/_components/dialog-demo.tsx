'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-wrap gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">프로필 수정</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>프로필 수정</DialogTitle>
            <DialogDescription>
              프로필 정보를 변경합니다. 저장 버튼을 클릭하면 변경사항이 적용됩니다.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="홍길동" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" defaultValue="hong@example.com" type="email" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              취소
            </Button>
            <Button onClick={() => setOpen(false)}>저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>새 항목 추가</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>새 항목 추가</DialogTitle>
            <DialogDescription>
              항목 이름을 입력하고 추가 버튼을 클릭하세요.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-4">
            <Label htmlFor="item-name">항목 이름</Label>
            <Input id="item-name" placeholder="항목 이름 입력..." />
          </div>
          <DialogFooter>
            <Button>추가</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
