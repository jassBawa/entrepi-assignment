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
        return <Crown className="h-5 w-5 text-[#5B2A86] dark:text-[#FFDE5A]" />
      case 1:
        return <Trophy className="h-5 w-5 text-[#757575] dark:text-[#E0E0E0]" />
      case 2:
        return <Medal className="h-5 w-5 text-[#5B2A86] dark:text-[#FFDE5A]" />
      default:
        return <span className="text-sm font-medium text-[#757575] dark:text-[#E0E0E0]">{index + 1}</span>
    }
  }

  return (
    <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black dark:text-white">
          <Trophy className="h-5 w-5 text-[#5B2A86] dark:text-[#FFDE5A]" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="xp" onValueChange={(value) => setType(value as "xp" | "streak")}>
          <TabsList className="grid w-full grid-cols-2 bg-[#E0E0E0] dark:bg-[#757575]">
            <TabsTrigger value="xp" className="data-[state=active]:bg-[#5B2A86] data-[state=active]:text-white dark:data-[state=active]:bg-[#FFDE5A] dark:data-[state=active]:text-black">Top XP</TabsTrigger>
            <TabsTrigger value="streak" className="data-[state=active]:bg-[#5B2A86] data-[state=active]:text-white dark:data-[state=active]:bg-[#FFDE5A] dark:data-[state=active]:text-black">Top Streaks</TabsTrigger>
          </TabsList>
          <TabsContent value="xp" className="mt-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-10 bg-[#E0E0E0] dark:bg-[#757575] rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#E0E0E0] dark:hover:bg-[#757575]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {getMedal(index)}
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">{user.name}</p>
                        <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">
                          Last active: {new Date(user.lastActiveOn).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#5B2A86] dark:text-[#FFDE5A]">{user.xp} XP</p>
                      <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">{user.streak} day streak</p>
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
                    <div className="h-10 bg-[#E0E0E0] dark:bg-[#757575] rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#E0E0E0] dark:hover:bg-[#757575]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {getMedal(index)}
                      </div>
                      <div>
                        <p className="font-medium text-black dark:text-white">{user.name}</p>
                        <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">
                          Last active: {new Date(user.lastActiveOn).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#5B2A86] dark:text-[#FFDE5A]">{user.streak} days</p>
                      <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">{user.xp} XP</p>
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