"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import prisma from "@/lib/prisma"
import { LessonCompletion } from "@/components/lesson-completion"
import { ReflectionForm } from "@/components/reflection-form"

interface Reflection {
  id: number
  answer: string
}

interface ReflectiveQuestion {
  id: number
  question: string
  reflection?: Reflection
}

interface Lesson {
  id: number
  title: string
  content: string
  course: {
    id: number
    title: string
  }
  completed: boolean
  questions: ReflectiveQuestion[]
}

async function getLesson(lessonId: number): Promise<Lesson | null> {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      course: true,
      completions: true,
      reflections: {
        include: {
          reflections: {
            take: 1,
            orderBy: {
              id: 'desc'
            }
          }
        }
      }
    }
  })

  if (!lesson) return null

  return {
    id: lesson.id,
    title: lesson.title,
    content: lesson.content,
    course: {
      id: lesson.course.id,
      title: lesson.course.title
    },
    completed: lesson.completions.length > 0,
    questions: lesson.reflections.map((q: any) => ({
      id: q.id,
      question: q.question,
      reflection: q.reflections[0] ? {
        id: q.reflections[0].id,
        answer: q.reflections[0].answer
      } : undefined
    }))
  }
}

export default async function LessonPage({
  params
}: {
  params: Promise<{ lessonId: string }>
}) {
  const lessonId = (await params).lessonId

  if(!lessonId) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        </div>
      </div>
    )
  }
  const lesson = await getLesson(parseInt(lessonId))
  if (!lesson) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
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
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
          <p className="text-muted-foreground mt-2">
            From: {lesson.course.title}
          </p>
        </div>
        <Button asChild>
          <Link href={`/courses/${lesson.course.id}`}>Back to Course</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lesson Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {lesson.content}
          </div>
        </CardContent>
      </Card>

      {lesson.questions.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Reflective Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {lesson.questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <p className="font-medium">{question.question}</p>
                  {question.reflection ? (
                    <div className="p-4 bg-muted rounded-md">
                      <p className="text-sm">{question.reflection.answer}</p>
                    </div>
                  ) : (
                    <ReflectionForm questionId={question.id} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <LessonCompletion lessonId={lesson.id.toString()} />
      </div>
    </div>
  )
} 