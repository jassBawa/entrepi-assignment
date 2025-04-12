import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  category: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  image: string;
}

export default function CourseCard({
  title,
  category,
  progress,
  totalLessons,
  completedLessons,
  image,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader className="p-4">
        <h3 className="font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between text-sm mb-2">
          <span>{progress}% complete</span>
          <span className="text-muted-foreground">
            {completedLessons}/{totalLessons} lessons
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link
            href={`/courses/${encodeURIComponent(
              title.toLowerCase().replace(/ /g, '-')
            )}`}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Continue Learning
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
