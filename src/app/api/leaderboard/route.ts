// pages/api/leaderboard/index.js

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") as "xp" | "streak"

    const users = await prisma.user.findMany({
      include: {
        streak: true,
      },
    })

    // Transform and sort users based on the selected type
    const sortedUsers = users
      .map((user) => ({
        id: user.id,
        name: user.name,
        xp: user.xp,
        streak: user.streak?.currentCount || 0,
        lastActiveOn: user.streak?.lastActiveOn || new Date(),
      }))
      .sort((a, b) => {
        if (type === "xp") {
          return b.xp - a.xp
        } else {
          return b.streak - a.streak
        }
      })

    return NextResponse.json(sortedUsers)
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    )
  }
}
