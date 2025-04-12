"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { Trophy } from "lucide-react"

interface LeaderboardUser {
  id: number
  name: string
  xp: number
  streak: {
    currentCount: number
  }
}

export function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([])
  const [type, setType] = useState<"xp" | "streak">("xp")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`/api/leaderboard?type=${type}`)
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error("Error fetching leaderboard:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [type])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="xp" onValueChange={(value) => setType(value as "xp" | "streak")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="xp">Top XP</TabsTrigger>
            <TabsTrigger value="streak">Top Streaks</TabsTrigger>
          </TabsList>
          <TabsContent value="xp" className="mt-4">
            <div className="space-y-4">
              {loading ? (
                <div className="text-center">Loading...</div>
              ) : (
                users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted"
                  >
                    <div className="flex items-center space-x-2">
                      {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                      {index === 1 && <Trophy className="h-5 w-5 text-gray-400" />}
                      {index === 2 && <Trophy className="h-5 w-5 text-amber-600" />}
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {user.xp} XP
                    </span>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
          <TabsContent value="streak" className="mt-4">
            <div className="space-y-4">
              {loading ? (
                <div className="text-center">Loading...</div>
              ) : (
                users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted"
                  >
                    <div className="flex items-center space-x-2">
                      {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                      {index === 1 && <Trophy className="h-5 w-5 text-gray-400" />}
                      {index === 2 && <Trophy className="h-5 w-5 text-amber-600" />}
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {user.streak.currentCount} days
                    </span>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 