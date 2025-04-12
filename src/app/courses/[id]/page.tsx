'use client';

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
import { useRouter } from 'next/navigation';
interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

const dummyLessons: Lesson[] = [
  {
    id: 1,
    title: 'Introduction to Quantum States',
    description: 'Learn about quantum states and their properties',
    duration: '15 min',
    completed: true,
  },
  {
    id: 2,
    title: 'Wave-Particle Duality',
    description: 'Understand the dual nature of quantum particles',
    duration: '20 min',
    completed: true,
  },
  {
    id: 3,
    title: 'Quantum Superposition',
    description: 'Explore the concept of quantum superposition',
    duration: '25 min',
    completed: false,
  },
  {
    id: 4,
    title: 'Quantum Entanglement',
    description: 'Learn about quantum entanglement and its applications',
    duration: '30 min',
    completed: false,
  },
];

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const courseId = parseInt(params.id);
  const router = useRouter();
  const progress = 50; // This would come from the database
  const completedLessons = dummyLessons.filter(
    (lesson) => lesson.completed
  ).length;
  const totalLessons = dummyLessons.length;

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">
          Introduction to Quantum Mechanics
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
                {dummyLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-4 p-4 rounded-lg border"
                  >
                    <div className="flex-shrink-0">
                      {lesson.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {lesson.description}
                      </p>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Duration: {lesson.duration}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => router.push(`/courses/${courseId}/lessons/${lesson.id}`)}>
                      {lesson.completed ? 'Review' : 'Start'}
                    </Button>
                  </div>
                ))}
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
                This course introduces the fundamental concepts of quantum
                mechanics, including quantum states, wave-particle duality,
                superposition, and entanglement. You'll learn how these concepts
                form the basis of modern physics and their applications in
                technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
