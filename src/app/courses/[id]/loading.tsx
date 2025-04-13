import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CourseLoading() {
  return (
    <div className="container mx-auto py-8 bg-white dark:bg-black min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-9 w-[300px]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-2 w-full" />
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Skeleton className="h-8 w-[150px]" />
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-[200px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                  <Skeleton className="h-10 w-[100px]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 