import { LoadingSpinner } from '@/components/composite/loading-spinner'

export default function DashboardLoading() {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <LoadingSpinner size="lg" />
    </div>
  )
}
