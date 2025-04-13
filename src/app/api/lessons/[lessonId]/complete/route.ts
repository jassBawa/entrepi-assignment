import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(
  request: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const lessonId = parseInt(params.lessonId)

    // Get the first user
    const user = await prisma.user.findFirst()

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Mark the lesson as completed
    const completedLesson = await prisma.lessonCompletion.create({
      data: {
        userId: user.id,
        lessonId: lessonId,
        completedAt: new Date()
      }
    })

    // Get the user's current streak
    const userWithStreak = await prisma.user.findUnique({
      where: { id: user.id },
      include: { streak: true }
    })

    if (!userWithStreak) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // If user doesn't have a streak record, create one
    if (!userWithStreak.streak) {
      const streak = await prisma.streak.create({
        data: {
          userId: user.id,
          currentCount: 1,
          lastActiveOn: today
        }
      })
      return NextResponse.json({ completedLesson, streak })
    }

    const lastActive = new Date(userWithStreak.streak.lastActiveOn)
    lastActive.setHours(0, 0, 0, 0)

    // Calculate days difference
    const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))

    let newStreakCount = userWithStreak.streak.currentCount

    if (daysDiff === 0) {
      // Already active today
      return NextResponse.json({ completedLesson, streak: userWithStreak.streak })
    } else if (daysDiff === 1) {
      // Consecutive day
      newStreakCount += 1
    } else {
      // Streak broken, reset to 1
      newStreakCount = 1
    }

    // Update the streak
    const updatedStreak = await prisma.streak.update({
      where: { id: userWithStreak.streak.id },
      data: {
        currentCount: newStreakCount,
        lastActiveOn: today
      }
    })

    return NextResponse.json({ completedLesson, streak: updatedStreak })
  } catch (error) {
    console.error("Error completing lesson:", error)
    return NextResponse.json(
      { error: "Failed to complete lesson" },
      { status: 500 }
    )
  }
} 