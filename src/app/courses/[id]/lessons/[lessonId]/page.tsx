"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, CheckCircle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface ReflectiveQuestion {
  id: number
  question: string
  answer?: string
}

const dummyQuestions: Question[] = [
  {
    id: 1,
    question: "What is the fundamental principle of quantum superposition?",
    options: [
      "A quantum system can exist in multiple states simultaneously",
      "Quantum particles always have a definite position",
      "Quantum states are always deterministic",
      "Quantum mechanics only applies to large objects"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which experiment demonstrates wave-particle duality?",
    options: [
      "Double-slit experiment",
      "Michelson-Morley experiment",
      "Stern-Gerlach experiment",
      "Young's experiment"
    ],
    correctAnswer: 0
  }
]

const dummyReflectiveQuestions: ReflectiveQuestion[] = [
  {
    id: 1,
    question: "How would you explain quantum superposition to someone who has never studied physics?",
  },
  {
    id: 2,
    question: "What real-world applications of quantum superposition can you think of?",
  }
]

export default function LessonPage({
  params
}: {
  params: { id: string; lessonId: string }
}) {
  const courseId = parseInt(params.id)
  const lessonId = parseInt(params.lessonId)
  const progress = 50 // This would come from the database
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({})
  const [tempAnswers, setTempAnswers] = useState<Record<number, string>>({})
  const [isContentRead, setIsContentRead] = useState(false)
  const [isPracticeComplete, setIsPracticeComplete] = useState(false)
  const [showReflections, setShowReflections] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeSection, setActiveSection] = useState<'content' | 'practice' | 'reflection'>('content')

  // Fetch existing reflections
  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const userId = 1 // This should come from your auth system
        const reflections = await Promise.all(
          dummyReflectiveQuestions.map(async (question) => {
            const response = await fetch(
              `/api/reflections?userId=${userId}&questionId=${question.id}`
            )
            const data = await response.json()
            if (data) {
              setAnswers(prev => ({
                ...prev,
                [question.id]: data.answer
              }))
            }
          })
        )
      } catch (error) {
        console.error("Error fetching reflections:", error)
      }
    }

    fetchReflections()
  }, [])

  const handleAnswerSubmit = async () => {
    const unansweredQuestions = dummyReflectiveQuestions.filter(
      question => !tempAnswers[question.id]
    )
    if (unansweredQuestions.length > 0) return

    try {
      const promises = dummyReflectiveQuestions.map(question => 
        fetch("/api/reflections", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: 1, // This should come from your auth system
            questionId: question.id,
            answer: tempAnswers[question.id],
          }),
        })
      )

      const responses = await Promise.all(promises)
      if (responses.every(response => response.ok)) {
        setAnswers(tempAnswers)
        setTempAnswers({})
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error saving reflections:", error)
    }
  }

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: optionIndex
    }))
  }

  const checkPracticeCompletion = () => {
    const allQuestionsAnswered = dummyQuestions.every(
      question => selectedOptions[question.id] !== undefined
    )
    setIsPracticeComplete(allQuestionsAnswered)
    if (allQuestionsAnswered && isContentRead) {
      setShowReflections(true)
    }
  }

  useEffect(() => {
    checkPracticeCompletion()
  }, [selectedOptions, isContentRead])

  const handleContentRead = () => {
    setIsContentRead(true)
    setActiveSection('practice')
  }

  const handlePracticeComplete = () => {
    if (isPracticeComplete) {
      setActiveSection('reflection')
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/courses/${courseId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Quantum Superposition</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {activeSection === 'content' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lesson Content</CardTitle>
                {isContentRead && (
                  <div className="flex items-center text-green-500">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h2>Understanding Quantum Superposition</h2>
                <p>
                  Quantum superposition is a fundamental principle of quantum mechanics that states that,
                  much like waves in classical physics, any two (or more) quantum states can be added together
                  ("superposed") and the result will be another valid quantum state.
                </p>
                <h3>Key Concepts</h3>
                <ul>
                  <li>Quantum states can exist in multiple states simultaneously</li>
                  <li>Superposition is different from classical probability</li>
                  <li>Measurement causes the collapse of the wave function</li>
                  <li>Superposition is the basis of quantum computing</li>
                </ul>
              </div>
              {!isContentRead && (
                <Button 
                  className="mt-4" 
                  onClick={handleContentRead}
                >
                  Mark as Read
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {activeSection === 'practice' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Practice Questions</CardTitle>
                {isPracticeComplete && (
                  <div className="flex items-center text-green-500">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dummyQuestions.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="font-medium">{question.question}</h3>
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-muted ${
                            selectedOptions[question.id] === index ? 'bg-muted' : ''
                          }`}
                          onClick={() => handleOptionSelect(question.id, index)}
                        >
                          <div className={`h-4 w-4 rounded-full border-2 ${
                            selectedOptions[question.id] === index ? 'border-primary' : ''
                          }`} />
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {isPracticeComplete && (
                  <Button 
                    className="w-full mt-4"
                    onClick={handlePracticeComplete}
                  >
                    Continue
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === 'reflection' && (
          <Card>
            <CardHeader>
              <CardTitle>Reflective Questions</CardTitle>
            </CardHeader>
            <CardContent>
              {showSuccess && (
                <Alert className="mb-4">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    Your reflections have been saved successfully!
                  </AlertDescription>
                </Alert>
              )}
              <div className="space-y-6">
                {dummyReflectiveQuestions.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="font-medium">{question.question}</h3>
                    {answers[question.id] ? (
                      <div className="p-4 bg-muted rounded-md">
                        <p className="text-sm">{answers[question.id]}</p>
                      </div>
                    ) : (
                      <Textarea
                        placeholder="Type your answer here..."
                        className="min-h-[100px]"
                        value={tempAnswers[question.id] || ""}
                        onChange={(e) => setTempAnswers(prev => ({
                          ...prev,
                          [question.id]: e.target.value
                        }))}
                      />
                    )}
                  </div>
                ))}
                {Object.keys(answers).length === 0 && (
                  <Button 
                    className="w-full mt-4"
                    onClick={handleAnswerSubmit}
                    disabled={dummyReflectiveQuestions.some(
                      question => !tempAnswers[question.id]
                    )}
                  >
                    Submit All Reflections
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Lesson Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <Button 
                className="w-full" 
                size="lg" 
                asChild
                disabled={!Object.keys(answers).length}
              >
                <Link href={`/courses/${courseId}/lessons/${lessonId + 1}`}>
                  Next Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 