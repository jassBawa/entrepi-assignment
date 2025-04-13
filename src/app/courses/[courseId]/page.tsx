import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import prisma from "@/lib/prisma"
import { CheckCircle2, Circle } from "lucide-react"

interface Lesson {
  id: number
  title: string
  content: string
  completed: boolean
}

interface Course {
  id: number
  title: string
  description: string
  lessons: Lesson[]
}

async function getCourse(courseId: number): Promise<Course | null> {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      lessons: {
        include: {
          completions: true
        }
      }
    }
  })

  if (!course) return null

  return {
    id: course.id,
    title: course.title,
    description: course.description,
    lessons: course.lessons.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      content: lesson.content,
      completed: lesson.completions.length > 0
    }))
  }
}

export default async function CoursePage({
  params
}: {
  params: { courseId: string }
}) {
  const courseId = parseInt(params.courseId)
  const course = await getCourse(courseId)

  if (!course) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground mt-2">{course.description}</p>
        </div>
        <Button asChild>
          <Link href="/courses">Back to Courses</Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {course.lessons.map((lesson) => (
          <Card key={lesson.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                {lesson.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
                <CardTitle>{lesson.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{lesson.content}</p>
              <Button asChild>
                <Link href={`/lessons/${lesson.id}`}>
                  {lesson.completed ? "Review Lesson" : "Start Lesson"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 