import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

const REFLECTION_XP_REWARD = 10

export async function POST(request: Request) {
  try {
    const { userId, questionId, answer } = await request.json()

    const parsedUserId = parseInt(userId)
    const parsedQuestionId = parseInt(questionId)

    // Create reflection
    const reflection = await prisma.reflection.create({
      data: {
        userId: parsedUserId,
        questionId: parsedQuestionId,
        answer,
      },
    })

    // Add XP to user
    await prisma.user.update({
      where: { id: parsedUserId },
      data: {
        xp: { increment: REFLECTION_XP_REWARD },
      },
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

    if (!userId || !questionId) {
      return NextResponse.json(
        { error: "userId and questionId are required" },
        { status: 400 }
      )
    }

    const reflection = await prisma.reflection.findFirst({
      where: {
        userId: parseInt(userId),
        questionId: parseInt(questionId),
      },
    })

    return NextResponse.json(reflection)
  } catch (error) {
    console.error("Error fetching reflection:", error)
    return NextResponse.json(
      { error: "Failed to fetch reflection" },
      { status: 500 }
    )
  }
}
