"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FlameIcon as Fire, Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import StreakCalendar from "@/components/streak-calendar";

export default function Dashboard() {
  // State values for the dashboard. These can be updated via API calls.
  const [currentStreak, setCurrentStreak] = useState<number>(7);
  const [longestStreak, setLongestStreak] = useState<number>(14);
  const [totalDays, setTotalDays] = useState<number>(32);
  const [progress, setProgress] = useState<number>(45);
  const [loading, setLoading] = useState<boolean>(false);

  // Mock data for courses remains as-is.
  const courses = [
    {
      id: 1,
      title: "Introduction to Algebra",
      category: "Math",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Data Visualization",
      category: "Data Analysis",
      progress: 30,
      totalLessons: 10,
      completedLessons: 3,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Algorithms Basics",
      category: "Computer Science",
      progress: 50,
      totalLessons: 8,
      completedLessons: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Python Fundamentals",
      category: "Programming & AI",
      progress: 20,
      totalLessons: 15,
      completedLessons: 3,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  // Mock streak calendar data remains as-is.
  const streakData = [
    { date: "2023-04-05", completed: true },
    { date: "2023-04-06", completed: true },
    { date: "2023-04-07", completed: true },
    { date: "2023-04-08", completed: true },
    { date: "2023-04-09", completed: true },
    { date: "2023-04-10", completed: true },
    { date: "2023-04-11", completed: true },
    { date: "2023-04-12", completed: false },
  ];

  // Fetch the current streak from our backend API on component mount.
  useEffect(() => {
    fetch("/api/streak")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // The backend returns a streak record with { currentCount, lastActive, ... }
          setCurrentStreak(data.currentCount);
          // For demo purposes, we assume the longest streak is current streak + 3.
          // In a full implementation, you might store the actual longest streak in the DB.
          setLongestStreak(data.currentCount + 3);
          // You might also update totalDays based on additional API data.
        }
      })
      .catch((error) => console.error("Error fetching streak data:", error));
  }, []);

  // A function to mark today's activity by sending a POST request to update the streak.
  const handleCompleteToday = () => {
    setLoading(true);
    fetch("/api/streak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We use today's date as the activity date.
      body: JSON.stringify({ activityDate: new Date().toISOString() }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the current streak value based on API response.
        if (data) {
          setCurrentStreak(data.currentCount);
          // Optionally update longest streak here if the API provides that info.
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating streak:", error);
        setLoading(false);
      });
  };

  // Optional: Simulate progress update (this may be replaced by actual computed progress)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your learning progress and maintain your streak.
          </p>
        </div>
        <Button asChild className="mt-4 md:mt-0 bg-emerald-500 hover:bg-emerald-600">
          <Link href="/courses">Continue Learning</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Fire className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak} days</div>
            <p className="text-xs text-muted-foreground">Keep it going!</p>
            <Progress value={(currentStreak / 10) * 100} className="h-2 mt-2" />
            <Button
              onClick={handleCompleteToday}
              disabled={loading}
              className="mt-2 w-full"
            >
              {loading ? "Updating..." : "Mark Today's Activity"}
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{longestStreak} days</div>
            <p className="text-xs text-muted-foreground">Your personal best</p>
            <Progress value={(longestStreak / 20) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Learning Days</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDays} days</div>
            <p className="text-xs text-muted-foreground">Since you started</p>
            <Progress value={(totalDays / 50) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Goal</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 minutes</div>
            <p className="text-xs text-muted-foreground">Today's progress: 10 min</p>
            <Progress value={progress} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="streak">Streak Calendar</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                category={course.category}
                progress={course.progress}
                totalLessons={course.totalLessons}
                completedLessons={course.completedLessons}
                image={course.image}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="streak">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Streak</CardTitle>
              <CardDescription>
                Complete at least one lesson every day to maintain your streak.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StreakCalendar />
              <div className="mt-6 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current streak</span>
                  <span className="font-bold">{currentStreak} days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Longest streak</span>
                  <span className="font-bold">{longestStreak} days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Next milestone</span>
                  <span className="font-bold">10 days (3 to go)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">7-Day Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                    <Fire className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Completed 7 consecutive days of learning
                    </p>
                    <Badge className="mt-2 bg-green-500">Unlocked</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Learner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Completed 5 lessons in a single day
                    </p>
                    <Badge className="mt-2 bg-green-500">Unlocked</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Math Enthusiast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <div className="h-8 w-8 flex items-center justify-center text-purple-500 font-bold text-xl">π</div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Completed 10 math lessons
                    </p>
                    <Badge className="mt-2 bg-gray-500">9/10 completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your learning history</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
                  <div className="text-blue-500 font-bold">π</div>
                </div>
                <div>
                  <h4 className="font-medium">Advanced Algebra: Quadratic Equations</h4>
                  <p className="text-sm text-muted-foreground">Continue your algebra journey</p>
                  <Button variant="link" className="p-0 h-auto text-emerald-500" asChild>
                    <Link href="/courses/advanced-algebra">Start lesson</Link>
                  </Button>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded">
                  <div className="text-purple-500 font-bold">CS</div>
                </div>
                <div>
                  <h4 className="font-medium">Sorting Algorithms: Quick Sort</h4>
                  <p className="text-sm text-muted-foreground">Learn this efficient sorting algorithm</p>
                  <Button variant="link" className="p-0 h-auto text-emerald-500" asChild>
                    <Link href="/courses/sorting-algorithms">Start lesson</Link>
                  </Button>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Streak Insights</CardTitle>
            <CardDescription>Your learning patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Best Learning Days</h4>
                <div className="flex space-x-1">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 flex items-center justify-center rounded-full text-xs font-medium ${
                        [1, 3, 4].includes(i) ? "bg-emerald-500 text-white" : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Streak Milestones</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-sm">7 days</span>
                    <Badge className="bg-green-500">Completed</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">14 days</span>
                    <Badge className="bg-green-500">Completed</Badge>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-sm">30 days</span>
                    <Badge className="bg-gray-500">In progress</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
