import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';

// In App Router with server components, params is a prop passed to the page component
export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  // Since we're using the App Router in a server component, we need to make sure params is available
  // before using it (it might be coming from an async source)
  const parsedParams = (await params)
  const courseId = parseInt(parsedParams.id);
  if (!courseId) {
    return <div>Invalid course ID</div>;
  }


  
  
  // Fetch course details
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { lessons: true },
  });
  
  if (!course) {
    return <div>Course not found</div>;
  }
  
  // Get user (assuming logged in user with ID 1 for now)
  const userId = 1; // This should come from authentication
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      lessonCompletions: {
        where: {
          lesson: {
            courseId: courseId
          }
        }
      }
    }
  });
  
  // Map lesson completions for quick lookups
  const completedLessonIds = new Set(
    user?.lessonCompletions.map(completion => completion.lessonId) || []
  );
  
  // Calculate progress
  const totalLessons = course.lessons.length;
  const completedLessons = completedLessonIds.size;
  
  const progress = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;

  return (
    <div className="container mx-auto py-8 bg-white dark:bg-black min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          asChild
          className="text-black dark:text-white hover:bg-[#FFDE5A] dark:hover:bg-[#5B2A86]"
        >
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-black dark:text-white">{course.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Course Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#757575] dark:text-[#E0E0E0] mb-4">{course.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-black dark:text-white">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-[#E0E0E0] dark:bg-[#757575] [&>div]:bg-[#5B2A86] dark:[&>div]:bg-[#FFDE5A]"
              />
              <div className="text-sm text-[#757575] dark:text-[#E0E0E0]">
                {completedLessons} of {totalLessons} lessons completed
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">Lessons</h2>
          {course.lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-black dark:text-white">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-[#757575] dark:text-[#E0E0E0]">
                      {completedLessonIds.has(lesson.id) ? 'Completed' : 'Not started'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {completedLessonIds.has(lesson.id) && (
                      <div className="flex items-center text-[#5B2A86] dark:text-[#FFDE5A]">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="text-sm">Completed</span>
                      </div>
                    )}
                    <Button 
                      asChild
                      className="bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black"
                    >
                      <Link href={`/courses/${courseId}/lessons/${lesson.id}`}>
                        {completedLessonIds.has(lesson.id) ? 'Review' : 'Start'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}