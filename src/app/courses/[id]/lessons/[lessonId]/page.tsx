import prisma from "@/lib/prisma"
import { LessonClient } from "./lesson-client"


export default async function LessonPage({ params }: { params: Promise<{
  id: string
  lessonId: string
}>}) {
  const parsedParams = (await params)

  if(!parsedParams) {
    return <div>Course not found</div>
  }
  const courseId = parseInt(parsedParams.id)
  const lessonId = parseInt(parsedParams.lessonId)
  const DUMMY_USER_ID = 1 // This should come from auth system

  // Fetch lesson data
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      course: true,
      reflections: true,
      completions: {
        where: { userId: DUMMY_USER_ID },
        take: 1
      }
    }
  })


  if (!lesson) {
    return <div>Lesson not found</div>
  }
lesson.reflections
  // Fetch course progress
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      lessons: {
        include: {
          completions: {
            where: { userId: DUMMY_USER_ID }
          }
        }
      }
    }
  })

  if (!course) {
    return <div>Course not found</div>
  }

  const totalLessons = course.lessons.length
  const completedLessons = course.lessons.filter(
    lesson => lesson.completions.length > 0
  ).length
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <LessonClient 
      lesson={lesson}
      courseId={courseId}
      lessonId={lessonId}
      initialProgress={progress}
      isCompleted={lesson.completions.length > 0}
    />
  )
} 