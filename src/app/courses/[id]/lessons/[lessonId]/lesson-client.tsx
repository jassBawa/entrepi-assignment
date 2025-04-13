'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, CheckCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Reflection {
  id: number;
  question: string;
  answer?: string;
}

interface Lesson {
  id: number;
  title: string;
  content: string;
  course: {
    id: number;
    title: string;
    description: string;
  };
  reflections: {
    id: number;
    lessonId: number;
    question: string;
  }[];
  completions: {
    id: number;
    userId: number;
    lessonId: number;
    completedAt: Date;
  }[];
}

interface LessonClientProps {
  lesson: Lesson;
  courseId: number;
  lessonId: number;
  initialProgress: number;
  isCompleted: boolean;
}

export function LessonClient({
  lesson,
  courseId,
  lessonId,
  initialProgress,
  isCompleted,
}: LessonClientProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(initialProgress);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [tempAnswers, setTempAnswers] = useState<Record<number, string>>({});
  const [isContentRead, setIsContentRead] = useState(isCompleted);
  const [isPracticeComplete, setIsPracticeComplete] = useState(isCompleted);
  const [showReflections, setShowReflections] = useState(isCompleted);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeSection, setActiveSection] = useState<'content' | 'practice' | 'reflection'>(
    isCompleted ? 'reflection' : 'content'
  );

  const handleAnswerSubmit = async () => {
    const unansweredQuestions = lesson.reflections.filter(
      (question) => !tempAnswers[question.id]
    );
    if (unansweredQuestions.length > 0) return;

    try {
      const promises = lesson.reflections.map((question) =>
        fetch('/api/reflections', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 1, // This should come from your auth system
            questionId: question.id,
            answer: tempAnswers[question.id],
          }),
        })
      );

      const responses = await Promise.all(promises);
      if (responses.every((response) => response.ok)) {
        setAnswers(tempAnswers);
        setTempAnswers({});
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error saving reflections:', error);
    }
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const checkPracticeCompletion = () => {
    const allQuestionsAnswered = lesson.reflections.every(
      (question) => selectedOptions[question.id] !== undefined
    );
    setIsPracticeComplete(allQuestionsAnswered);
    if (allQuestionsAnswered && isContentRead) {
      setShowReflections(true);
    }
  };

  const handleContentRead = () => {
    setIsContentRead(true);
    setActiveSection('practice');
  };

  const handlePracticeComplete = () => {
    if (isPracticeComplete) {
      setActiveSection('reflection');
    }
  };

  const handlePracticeSubmit = () => {
    const allQuestionsAnswered = lesson.reflections.every(
      (question) => selectedOptions[question.id] !== undefined
    );
    if (allQuestionsAnswered) {
      setIsPracticeComplete(true);
      setActiveSection('reflection');
    }
  };

  const handleCompleteLesson = async () => {
    try {
      const response = await fetch(`/api/lessons/${lessonId}/complete`, {
        method: 'POST',
      });

      if (response.ok) {
        setProgress(100);
        router.refresh();
      }
    } catch (error) {
      console.error('Error completing lesson:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 bg-white dark:bg-black min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon" 
          asChild
          className="text-black dark:text-white hover:bg-[#FFDE5A] dark:hover:bg-[#5B2A86]"
        >
          <Link href={`/courses/${courseId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-black dark:text-white">{lesson.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {activeSection === 'content' && (
          <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-black dark:text-white">Lesson Content</CardTitle>
                {isContentRead && (
                  <div className="flex items-center text-[#5B2A86] dark:text-[#FFDE5A]">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none text-black dark:text-white">{lesson.content}</div>
              {!isContentRead && (
                <Button 
                  className="mt-4 bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black"
                  onClick={handleContentRead}
                >
                  Mark as Read
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {activeSection === 'practice' && (
          <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-black dark:text-white">Practice Questions</CardTitle>
                {isPracticeComplete && (
                  <div className="flex items-center text-[#5B2A86] dark:text-[#FFDE5A]">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {lesson.reflections.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="font-medium text-black dark:text-white">{question.question}</h3>
                    <div className="space-y-2">
                      {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-[#FFDE5A] dark:hover:bg-[#5B2A86] ${
                            selectedOptions[question.id] === index 
                              ? 'bg-[#FFDE5A] dark:bg-[#5B2A86] text-black dark:text-white' 
                              : 'border-[#E0E0E0] dark:border-[#757575]'
                          }`}
                          onClick={() => handleOptionSelect(question.id, index)}
                        >
                          <div
                            className={`h-4 w-4 rounded-full border-2 ${
                              selectedOptions[question.id] === index 
                                ? 'border-[#5B2A86] dark:border-[#FFDE5A]' 
                                : 'border-[#757575]'
                            }`}
                          />
                          <span className="text-black dark:text-white">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setActiveSection('content')}
                    className="border-[#5B2A86] text-[#5B2A86] hover:bg-[#FFDE5A] dark:border-[#FFDE5A] dark:text-[#FFDE5A] dark:hover:bg-[#5B2A86]"
                  >
                    Back to Content
                  </Button>
                  <Button
                    onClick={handlePracticeSubmit}
                    disabled={!lesson.reflections.every(
                      (question) => selectedOptions[question.id] !== undefined
                    )}
                    className="bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black disabled:opacity-50"
                  >
                    Submit Practice
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === 'reflection' && (
          <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Reflective Questions</CardTitle>
            </CardHeader>
            <CardContent>
              {showSuccess && (
                <Alert className="mb-4 bg-[#FFDE5A] dark:bg-[#5B2A86] border-[#5B2A86] dark:border-[#FFDE5A]">
                  <CheckCircle2 className="h-4 w-4 text-[#5B2A86] dark:text-[#FFDE5A]" />
                  <AlertDescription className="text-black dark:text-white">
                    Your reflections have been saved successfully!
                  </AlertDescription>
                </Alert>
              )}
              <div className="space-y-6">
                {lesson.reflections.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="font-medium text-black dark:text-white">{question.question}</h3>
                    {answers[question.id] ? (
                      <div className="p-4 bg-[#E0E0E0] dark:bg-[#757575] rounded-md">
                        <p className="text-sm text-black dark:text-white">{answers[question.id]}</p>
                      </div>
                    ) : (
                      <Textarea
                        placeholder="Type your answer here..."
                        className="min-h-[100px] border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000] text-black dark:text-white"
                        value={tempAnswers[question.id] || ''}
                        onChange={(e) =>
                          setTempAnswers((prev) => ({
                            ...prev,
                            [question.id]: e.target.value,
                          }))
                        }
                      />
                    )}
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setActiveSection('practice')}
                    className="border-[#5B2A86] text-[#5B2A86] hover:bg-[#FFDE5A] dark:border-[#FFDE5A] dark:text-[#FFDE5A] dark:hover:bg-[#5B2A86]"
                  >
                    Back to Practice
                  </Button>
                  {Object.keys(answers).length === 0 && (
                    <Button
                      onClick={handleAnswerSubmit}
                      disabled={lesson.reflections.some(
                        (question) => !tempAnswers[question.id]
                      )}
                      className="bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black disabled:opacity-50"
                    >
                      Submit Reflections
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-[#E0E0E0] dark:border-[#757575] bg-white dark:bg-[#000000]">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Lesson Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-black dark:text-white">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-[#E0E0E0] dark:bg-[#757575] [&>div]:bg-[#5B2A86] dark:[&>div]:bg-[#FFDE5A]"
              />
              {!isCompleted && (
                <Button
                  className="w-full bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black"
                  size="lg"
                  onClick={handleCompleteLesson}
                  disabled={!Object.keys(answers).length}
                >
                  Complete Lesson
                </Button>
              )}
              {isCompleted && (
                <Button 
                  className="w-full bg-[#5B2A86] hover:bg-[#4A2370] text-white dark:bg-[#FFDE5A] dark:hover:bg-[#E6C851] dark:text-black"
                  size="lg" 
                  asChild
                >
                  <Link href={`/courses/${courseId}/lessons/${lessonId + 1}`}>
                    Next Lesson
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
