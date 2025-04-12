"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface LessonCompletionProps {
  lessonId: string
}

export function LessonCompletion({ lessonId }: LessonCompletionProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCompleteLesson = async () => {
    try {
      setLoading(true)
      
      // Update lesson completion status
      await fetch(`/api/lessons/${lessonId}/complete`, {
        method: "POST",
      })

      // Update streak
      await fetch("/api/streak", {
        method: "POST",
      })

      // Refresh the page to show updated progress
      router.refresh()
    } catch (error) {
      console.error("Error completing lesson:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleCompleteLesson}
      disabled={loading}
      className="w-full"
    >
      {loading ? "Completing..." : "Complete Lesson"}
    </Button>
  )
} 