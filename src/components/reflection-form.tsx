"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ReflectionFormProps {
  questionId: number
  initialAnswer?: string
}

export function ReflectionForm({ questionId, initialAnswer = "" }: ReflectionFormProps) {
  const [answer, setAnswer] = useState(initialAnswer)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/reflections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionId,
          answer,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit reflection")
      }

      // Refresh the page to show the updated reflection
      router.refresh()
    } catch (error) {
      console.error("Error submitting reflection:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your reflection here..."
        className="min-h-[100px]"
        disabled={loading}
      />
      <Button
        onClick={handleSubmit}
        disabled={loading || !answer.trim()}
      >
        {loading ? "Submitting..." : "Submit Reflection"}
      </Button>
    </div>
  )
} 