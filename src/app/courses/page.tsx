import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Course {
  id: number
  title: string
  description: string
  category: string
  progress: number
  totalLessons: number
  completedLessons: number
  image: string
}

const dummyCourses: Course[] = [
  {
    id: 1,
    title: "Introduction to Quantum Mechanics",
    description: "Learn the fundamentals of quantum physics and its applications",
    category: "Physics",
    progress: 60,
    totalLessons: 10,
    completedLessons: 6,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
  },
  {
    id: 2,
    title: "Advanced Calculus",
    description: "Master advanced mathematical concepts and problem-solving techniques",
    category: "Mathematics",
    progress: 30,
    totalLessons: 15,
    completedLessons: 4,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Understand the basics of machine learning and artificial intelligence",
    category: "Computer Science",
    progress: 80,
    totalLessons: 8,
    completedLessons: 6,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
  }
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="h-48 bg-gray-200">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{course.title}</CardTitle>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {course.category}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {course.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="text-sm text-muted-foreground">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href={`/courses/${course.id}`}>Continue Learning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 