// pages/api/leaderboard/index.js

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") || "xp" // "xp" or "streak"

    let users
    if (type === "xp") {
      users = await prisma.user.findMany({
        orderBy: {
          xp: "desc"
        },
        take: 10,
        select: {
          id: true,
          name: true,
          xp: true,
          streak: {
            select: {
              currentCount: true
            }
          }
        }
      })
    } else {
      users = await prisma.user.findMany({
        orderBy: {
          streak: {
            currentCount: "desc"
          }
        },
        take: 10,
        select: {
          id: true,
          name: true,
          xp: true,
          streak: {
            select: {
              currentCount: true
            }
          }
        }
      })
    }

    return NextResponse.json(users)
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    )
  }
}
