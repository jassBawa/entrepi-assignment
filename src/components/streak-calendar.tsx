"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { FlameIcon as Fire } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StreakCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock streak data for the last 60 days
  const generateStreakData = () => {
    const today = new Date()
    const streakData = {}

    // Generate some random streak data
    for (let i = 0; i < 60; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const dateStr = date.toISOString().split("T")[0]

      // Current streak of 7 days
      if (i < 7) {
        streakData[dateStr] = true
      }
      // Gap in streak
      else if (i >= 7 && i < 10) {
        streakData[dateStr] = false
      }
      // Previous streak of 14 days
      else if (i >= 10 && i < 24) {
        streakData[dateStr] = true
      }
      // Random older streaks
      else {
        streakData[dateStr] = Math.random() > 0.3
      }
    }

    return streakData
  }

  const streakData = generateStreakData()

  // Convert streak data to dates for the calendar
  const completedDates = Object.entries(streakData)
    .filter(([_, completed]) => completed)
    .map(([dateStr]) => new Date(dateStr))

  return (
    <Calendar
      mode="multiple"
      selected={completedDates}
      className="rounded-md border"
      modifiers={{
        completed: completedDates,
      }}
      modifiersClassNames={{
        completed: "streak-completed",
      }}
      components={{
        Day: ({ date, displayMonth, selected, ...props }) => {
          // Format date to match streakData keys
          const dateStr = date.toISOString().split("T")[0]
          const isCompleted = streakData[dateStr]

          // Check if date is in current month
          const isCurrentMonth = date.getMonth() === displayMonth.getMonth()

          return (
            <div
              {...props}
              className={cn(props.className, "relative", !isCurrentMonth && "text-muted-foreground opacity-50")}
            >
              <div className="h-9 w-9 p-0 flex items-center justify-center">
                <span>{date.getDate()}</span>
                {isCompleted && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <Fire className="h-3 w-3 text-orange-500" />
                  </div>
                )}
              </div>
            </div>
          )
        },
      }}
    />
  )
}
