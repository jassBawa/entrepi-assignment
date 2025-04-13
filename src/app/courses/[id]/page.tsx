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
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const courseId = parseInt(params.id);
  
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
  const completedLessons = user?.lessonCompletions.filter(
    completion => completion.lessonId === courseId
  ).length || 0;
  
  const progress = totalLessons > 0 
    ? Math.round((completedLessons / totalLessons) * 100) 
    : 0;

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          {course.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.lessons.map((lesson) => {
                  const isCompleted = completedLessonIds.has(lesson.id);
                  
                  return (
                    <div
                      key={lesson.id}
                      className="flex items-start gap-4 p-4 rounded-lg border"
                    >
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        ) : (
                          <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {lesson.content.substring(0, 100)}...
                        </p>
                      </div>
                      <Link href={`/courses/${courseId}/lessons/${lesson.id}`}>
                        {isCompleted ? 'Review' : 'Start'}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="text-sm text-muted-foreground">
                  {completedLessons} of {totalLessons} lessons completed
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About This Course</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {course.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}