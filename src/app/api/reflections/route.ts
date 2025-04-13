import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

const REFLECTION_XP_REWARD = 10
const DUMMY_USER_ID = 1

export async function POST(request: Request) {
  try {
    const { questionId, answer } = await request.json()

    // Get the first user (for now, until we have auth)
    const user = await prisma.user.findFirst({
      where: { id: DUMMY_USER_ID }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Create the reflection
    const reflection = await prisma.reflection.create({
      data: {
        userId: user.id,
        questionId,
        answer
      }
    })
    // increase user xp
    await prisma.user.update({
      where: { id: user.id },
      data: { xp: { increment: REFLECTION_XP_REWARD } },
    })

    return NextResponse.json(reflection)
  } catch (error) {
    console.error("Error creating reflection:", error)
    return NextResponse.json(
      { error: "Failed to create reflection" },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const questionId = searchParams.get("questionId")

    // If both userId and questionId are provided, fetch a specific reflection
    if (userId && questionId) {
      const reflection = await prisma.reflection.findFirst({
        where: {
          userId: parseInt(userId),
          questionId: parseInt(questionId),
        },
      })
      return NextResponse.json(reflection)
    }

    // Otherwise, fetch all reflections with their related data
    const reflections = await prisma.reflection.findMany({
      include: {
        question: {
          include: {
            lesson: {
              select: {
                title: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    })

    return NextResponse.json(reflections)
  } catch (error) {
    console.error("Error fetching reflections:", error)
    return NextResponse.json(
      { error: "Failed to fetch reflections" },
      { status: 500 }
    )
  }
}
