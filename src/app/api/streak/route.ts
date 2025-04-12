import { NextResponse } from "next/server"
import { isSameDay, subDays } from "date-fns"
import prisma from "@/lib/prisma"

const userId = 1 // Hardcoded for demo
const XP_REWARD = 10 // XP per active day

// GET: Fetch current streak data
export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
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
    const today = new Date()

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { streak: true },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    let streak = user.streak
    let newXP = user.xp

    if (!streak) {
      // First time streak
      streak = await prisma.streak.create({
        data: {
          userId,
          currentCount: 1,
          lastActiveOn: today,
        },
      })

      newXP += XP_REWARD
    } else {
      const lastActive = new Date(streak.lastActiveOn)

      if (isSameDay(today, lastActive)) {
        return NextResponse.json({
          message: "Already active today",
          currentCount: streak.currentCount,
        })
      }

      const yesterday = subDays(today, 1)
      const continued = isSameDay(lastActive, yesterday)

      const updatedCount = continued ? streak.currentCount + 1 : 1
      streak = await prisma.streak.update({
        where: { userId },
        data: {
          currentCount: updatedCount,
          lastActiveOn: today,
        },
      })

      newXP += XP_REWARD
    }

    // Update user XP
    await prisma.user.update({
      where: { id: userId },
      data: {
        xp: newXP,
      },
    })

    return NextResponse.json({
      message: "Streak updated and XP rewarded",
      currentCount: streak.currentCount,
      xp: newXP,
      lastActiveOn: streak.lastActiveOn,
    })
  } catch (error) {
    console.error("Error updating streak:", error)
    return NextResponse.json(
      { error: "Failed to update streak" },
      { status: 500 }
    )
  }
}
