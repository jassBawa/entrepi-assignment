
import { Leaderboard } from "@/components/leaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Trophy, BookOpen, Target } from "lucide-react"
import prisma from "@/lib/prisma"

interface DashboardStats {
  totalXP: number
  currentStreak: number
  completedLessons: number
  totalLessons: number
  progress: number
}

async function getDashboardStats(): Promise<DashboardStats> {
  const user = await prisma.user.findFirst({
    include: {
      lessonCompletions: true,
      streak: true
    }
  })

  if (!user) {
    return {
      totalXP: 0,
      currentStreak: 0,
      completedLessons: 0,
      totalLessons: 0,
      progress: 0
    }
  }

  const totalLessons = await prisma.lesson.count()
  const completedLessons = user.lessonCompletions.length
  const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

  return {
    totalXP: user.xp,
    currentStreak: user.streak?.currentCount || 0,
    completedLessons,
    totalLessons,
    progress
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()

  return (
    <div className="container mx-auto py-8 bg-white dark:bg-black min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">Dashboard</h1>
        <Button 
          asChild 
          className="bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black"
        >
          <Link href="/courses">
            Browse Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#757575] dark:text-[#E0E0E0]">
              Total XP
            </CardTitle>
            <Trophy className="h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">{stats.totalXP}</div>
            <p className="text-xs text-[#757575] dark:text-[#E0E0E0]">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#757575] dark:text-[#E0E0E0]">
              Current Streak
            </CardTitle>
            <Target className="h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">{stats.currentStreak} days</div>
            <p className="text-xs text-[#757575] dark:text-[#E0E0E0]">
              Keep it up!
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#757575] dark:text-[#E0E0E0]">
              Completed Lessons
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">{stats.completedLessons}</div>
            <p className="text-xs text-[#757575] dark:text-[#E0E0E0]">
              of {stats.totalLessons} total lessons
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#757575] dark:text-[#E0E0E0]">
              Overall Progress
            </CardTitle>
            <Target className="h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">{Math.round(stats.progress)}%</div>
            <p className="text-xs text-[#757575] dark:text-[#E0E0E0]">
              You're making great progress!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-black dark:text-white">
                <span>Overall Progress</span>
                <span>{Math.round(stats.progress)}%</span>
              </div>
              <Progress 
                value={stats.progress} 
                className="h-2 bg-[#E0E0E0] dark:bg-[#757575] [&>div]:bg-[#5B2A86] dark:[&>div]:bg-[#FFDE5A]"
              />
              <div className="text-sm text-[#757575] dark:text-[#E0E0E0]">
                {stats.completedLessons} of {stats.totalLessons} lessons completed
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-black dark:text-white">Completed Lesson</p>
                  <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">Introduction to Quantum Mechanics</p>
                </div>
                <div className="text-sm text-[#5B2A86] dark:text-[#FFDE5A]">+50 XP</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-black dark:text-white">Maintained Streak</p>
                  <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">Day {stats.currentStreak}</p>
                </div>
                <div className="text-sm text-[#5B2A86] dark:text-[#FFDE5A]">+10 XP</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Leaderboard />
      </div>
    </div>
  )
}
