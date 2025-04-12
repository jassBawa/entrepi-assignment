import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LeaderboardUser {
  id: number
  name: string
  xp: number
  streak: number
  avatar?: string
}

const dummyUsers: LeaderboardUser[] = [
  { id: 1, name: "Alex Johnson", xp: 2500, streak: 7, avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Sarah Williams", xp: 2100, streak: 5, avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Michael Brown", xp: 1900, streak: 3, avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Emily Davis", xp: 1700, streak: 4, avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "David Wilson", xp: 1500, streak: 2, avatar: "https://i.pravatar.cc/150?img=5" },
]

export function Leaderboard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Top Learners</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {dummyUsers.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="font-bold text-lg">{index + 1}</div>
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Streak: {user.streak} days
                  </div>
                </div>
              </div>
              <div className="font-bold">{user.xp} XP</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 