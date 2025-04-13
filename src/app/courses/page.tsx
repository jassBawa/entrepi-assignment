import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import prisma from "@/lib/prisma"

interface CourseWithProgress {
  id: number
  title: string
  description: string
  lessons: {
    id: number
    title: string
    completed: boolean
  }[]
  totalLessons: number
  completedLessons: number
  progress: number
}

async function getCourses(): Promise<CourseWithProgress[]> {
  const courses = await prisma.course.findMany({
    include: {
      lessons: {
        include: {
          completions: true
        }
      }
    }
  })

  return courses.map(course => {
    const totalLessons = course.lessons.length
    const completedLessons = course.lessons.filter(lesson => 
      lesson.completions.length > 0
    ).length
    const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      lessons: course.lessons.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
        completed: lesson.completions.length > 0
      })),
      totalLessons,
      completedLessons,
      progress
    }
  })
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                src={`https://source.unsplash.com/random/400x300/?${encodeURIComponent(course.title)}`}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {course.title.split(' ')[0]}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {course.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(course.progress)}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="text-sm text-muted-foreground">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href={`/courses/${course.id}`}>Continue Learning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 