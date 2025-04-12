"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface StreakProps {
  currentStreak: number
  lastActiveOn: Date | null
  loading: boolean
}

export function Streak({ currentStreak, lastActiveOn, loading }: StreakProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Current Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="animate-pulse">
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-4xl font-bold">{currentStreak} days</p>
            {lastActiveOn && (
              <p className="text-sm text-muted-foreground">
                Last active on {lastActiveOn.toLocaleDateString()}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 