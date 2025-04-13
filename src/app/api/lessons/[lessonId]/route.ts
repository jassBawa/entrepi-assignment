import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const lessonId = parseInt(params.lessonId)

    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        reflections: {
          select: {
            id: true,
            question: true,
          },
        },
      },
    })

    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 })
    }

    return NextResponse.json(lesson)
  } catch (error) {
    console.error("Error fetching lesson:", error)
    return NextResponse.json(
      { error: "Failed to fetch lesson" },
      { status: 500 }
    )
  }
} 