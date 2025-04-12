"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"

interface StreakProps {
  currentStreak: number
  lastActiveOn: Date | null
  onCompleteToday: () => void
  loading: boolean
}

export function Streak({ currentStreak, lastActiveOn, onCompleteToday, loading }: StreakProps) {
  // console.log(currentStreak, lastActiveOn, loading)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Daily Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold">{currentStreak} 🔥</div>
          </div>
          <div className="space-y-2">
          </div>
          <div className="flex flex-col gap-2">
            <Button
              onClick={onCompleteToday}
              disabled={loading}
              className="w-full"
            >
              {loading ? "Updating..." : "Mark Today's Activity"}
            </Button>
            {lastActiveOn && (
              <div className="text-sm text-muted-foreground">
                Last active: {lastActiveOn.toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 