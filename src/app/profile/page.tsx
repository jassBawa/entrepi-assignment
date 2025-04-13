"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface Reflection {
  id: number
  answer: string
  question: {
    question: string
    lesson: {
      title: string
    }
  }
  createdAt: string
}

export default function ProfilePage() {
  const [reflections, setReflections] = useState<Reflection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const response = await fetch("/api/reflections")
        if (!response.ok) throw new Error("Failed to fetch reflections")
        const data = await response.json()
        setReflections(data)
      } catch (error) {
        console.error("Error fetching reflections:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReflections()
  }, [])

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Learning Journal</h1>
        </div>
        
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : reflections.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                You haven't answered any reflective questions yet. Start learning to build your journal!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {reflections.map((reflection) => (
              <Card key={reflection.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {reflection.question.lesson.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {new Date(reflection.createdAt).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Question:</h3>
                    <p className="text-muted-foreground">{reflection.question.question}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Your Reflection:</h3>
                    <p>{reflection.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 