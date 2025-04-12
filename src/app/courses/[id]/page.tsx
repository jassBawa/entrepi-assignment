"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, FlameIcon as Fire, ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CoursePage() {
  const params = useParams()
  console.log(params)
  const courseId = params.id

  const [currentLesson, setCurrentLesson] = useState(1)
  const [lessonCompleted, setLessonCompleted] = useState(false)
  const [streakUpdated, setStreakUpdated] = useState(false)

  // Mock course data
  const course = {
    id: 2,
    title: "Introduction to Algebra",
    description: "Learn the fundamentals of algebra through interactive lessons",
    totalLessons: 12,
    completedLessons: 3,
    progress: 25,
    lessons: [
      { id: 1, title: "Variables and Constants", duration: "10 min", completed: true },
      { id: 2, title: "Expressions and Equations", duration: "15 min", completed: true },
      { id: 3, title: "Solving Linear Equations", duration: "20 min", completed: true },
      { id: 4, title: "Graphing Linear Equations", duration: "15 min", completed: false },
      { id: 5, title: "Systems of Equations", duration: "20 min", completed: false },
      { id: 6, title: "Quadratic Equations", duration: "25 min", completed: false },
      { id: 7, title: "Factoring", duration: "15 min", completed: false },
      { id: 8, title: "Polynomials", duration: "20 min", completed: false },
      { id: 9, title: "Rational Expressions", duration: "15 min", completed: false },
      { id: 10, title: "Radicals", duration: "20 min", completed: false },
      { id: 11, title: "Functions", duration: "25 min", completed: false },
      { id: 12, title: "Final Challenge", duration: "30 min", completed: false },
    ],
  }

  const completeLesson = () => {
    setLessonCompleted(true)
    setStreakUpdated(true)
    // In a real app, you would update the backend here
  }

  const nextLesson = () => {
    if (currentLesson < course.totalLessons) {
      setCurrentLesson(currentLesson + 1)
      setLessonCompleted(false)
      setStreakUpdated(false)
    }
  }

  const prevLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1)
      setLessonCompleted(course.lessons[currentLesson - 2].completed)
      setStreakUpdated(false)
    }
  }

  return (
    <>
    <div className=" mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => {}} className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-2">
          <Badge variant="outline" className="flex items-center">
            <BookOpen className="mr-1 h-3 w-3" />
            {course.completedLessons}/{course.totalLessons} lessons
          </Badge>
          <Badge variant="outline" className="flex items-center">
            <Fire className="mr-1 h-3 w-3 text-orange-500" />
            Streak: 7 days
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Lesson {currentLesson}: {course.lessons[currentLesson - 1].title}</CardTitle>
                <Badge className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {course.lessons[currentLesson - 1].duration}
                </Badge>
              </div>
              <CardDescription>
                Progress: {Math.round((currentLesson - 1) / course.totalLessons * 100)}%
              </CardDescription>
              <Progress value={(currentLesson - 1) / course.totalLessons * 100} className="h-2" />
            </CardHeader>
            <CardContent className="pb-6">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center mb-6">
                <div className="text-center p-6">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-medium mb-2\">Interactive Lesson Content </h3>
                  <h3 className="text-xl font-medium mb-2">Interactive Lesson Content</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    This is where the interactive lesson content would be displayed.
                    In a real application, this would include videos, interactive problems,
                    and exercises to help you learn the material.
                  </p>
                </div>
              </div>

              {streakUpdated && (
                <Alert className="mb-6 bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-900">
                  <Fire className="h-4 w-4 text-orange-500" />
                  <AlertTitle>Streak updated!</AlertTitle>
                  <AlertDescription>
                    You've maintained your learning streak for 7 days. Keep it up!
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <h3 className="font-medium">Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Understanding the fundamental principles of {course.lessons[currentLesson - 1].title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Applying these concepts to solve real-world problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building a foundation for more advanced topics</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={prevLesson}
                disabled={currentLesson === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              {!lessonCompleted ? (
                <Button onClick={completeLesson} className="bg-emerald-500 hover:bg-emerald-600">
                  Complete Lesson
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={nextLesson} disabled={currentLesson === course.totalLessons}>
                  Next Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Your Streak</CardTitle>
              <CardDescription>Keep learning daily to maintain your streak</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-24 h-24" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200 dark:text-gray-700"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-orange-500"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - 7/10)}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">7</span>
                    <span className="text-xs">days</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current streak</span>
                  <span className="font-medium">7 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Longest streak</span>
                  <span className="font-medium">14 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next milestone</span>
                  <span className="font-medium">10 days (3 to go)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Outline</CardTitle>
              <CardDescription>
                {course.completedLessons} of {course.totalLessons} lessons completed
              </CardDescription>
              <Progress value={course.completedLessons / course.totalLessons * 100} className="h-2" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <li 
                    key={lesson.id}
                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                      currentLesson === index + 1 ? "bg-gray-100 dark:bg-gray-800" : ""
                    } ${lesson.completed ? "text-muted-foreground" : ""}`}
                    onClick={() => setCurrentLesson(index + 1)}
                  >
                    <div className="flex items-center">
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <div className={`w-4 h-4 rounded-full mr-2 ${
                          currentLesson === index + 1 ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
                        }`}></div>
                      )}
                      <span className={`text-sm ${lesson.completed ? "line-through" : ""}`}>
                        {index + 1}. {lesson.title}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {lesson.duration}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  )
}
