import { NextResponse } from "next/server"
import { isSameDay, subDays } from "date-fns"
import prisma from "@/lib/prisma"

const DUMMY_USER_ID = 1
const XP_REWARD = 10 // XP per active day

// GET: Fetch current streak data
export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: DUMMY_USER_ID },
      include: { streak: true },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      currentCount: user.streak?.currentCount || 0,
      lastActiveOn: user.streak?.lastActiveOn,
    })
  } catch (error) {
    console.error("Error fetching streak:", error)
    return NextResponse.json(
      { error: "Failed to fetch streak" },
      { status: 500 }
    )
  }
}

// POST: Update streak on user activity & reward XP
export async function POST() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: DUMMY_USER_ID },
      include: { streak: true }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // If user doesn't have a streak record, create one
    if (!user.streak) {
      const streak = await prisma.streak.create({
        data: {
          userId: DUMMY_USER_ID,
          currentCount: 1,
          lastActiveOn: today
        }
      })
      return NextResponse.json(streak)
    }

    const lastActive = new Date(user.streak.lastActiveOn)
    lastActive.setHours(0, 0, 0, 0)

    // Calculate days difference
    const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))

    let newStreakCount = user.streak.currentCount

    if (daysDiff === 0) {
      // Already active today
      return NextResponse.json(user.streak)
    } else if (daysDiff === 1) {
      // Consecutive day
      newStreakCount += 1
    } else {
      // Streak broken, reset to 1
      newStreakCount = 1
    }

    // Update the streak
    const updatedStreak = await prisma.streak.update({
      where: { id: user.streak.id },
      data: {
        currentCount: newStreakCount,
        lastActiveOn: today
      }
    })

    return NextResponse.json(updatedStreak)
  } catch (error) {
    console.error("Error updating streak:", error)
    return NextResponse.json(
      { error: "Failed to update streak" },
      { status: 500 }
    )
  }
}
