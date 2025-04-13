"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Crown } from "lucide-react"
import { useEffect, useState } from "react"

interface LeaderboardUser {
  id: number
  name: string
  xp: number
  streak: number
  lastActiveOn: string
}

export function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([])
  const [type, setType] = useState<"xp" | "streak">("xp")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`/api/leaderboard?type=${type}`)
        if (!response.ok) throw new Error("Failed to fetch leaderboard")
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

  const getMedal = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 1:
        return <Trophy className="h-5 w-5 text-gray-400" />
      case 2:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-medium">{index + 1}</span>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="xp" onValueChange={(value) => setType(value as "xp" | "streak")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="xp">Top XP</TabsTrigger>
            <TabsTrigger value="streak">Top Streaks</TabsTrigger>
          </TabsList>
          <TabsContent value="xp" className="mt-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {getMedal(index)}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Last active: {new Date(user.lastActiveOn).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.xp} XP</p>
                      <p className="text-sm text-muted-foreground">{user.streak} day streak</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="streak" className="mt-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {getMedal(index)}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Last active: {new Date(user.lastActiveOn).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.streak} days</p>
                      <p className="text-sm text-muted-foreground">{user.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 