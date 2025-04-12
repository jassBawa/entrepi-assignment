import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ReflectiveQuestion {
  id: number
  question: string
  answer?: string
  date: string
}

const dummyQuestions: ReflectiveQuestion[] = [
  {
    id: 1,
    question: "What was the most challenging concept you learned today?",
    answer: "Understanding quantum superposition was quite challenging, but I'm getting better at it.",
    date: "2024-04-10"
  },
  {
    id: 2,
    question: "How did you apply what you learned in a practical way?",
    answer: "I used the mathematical concepts to solve a real-world physics problem.",
    date: "2024-04-09"
  },
  {
    id: 3,
    question: "What would you like to learn more about?",
    date: "2024-04-11"
  }
]

export function ReflectiveQuestions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Reflective Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {dummyQuestions.map((q) => (
            <div key={q.id} className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium">{q.question}</div>
                <div className="text-sm text-muted-foreground">
                  {new Date(q.date).toLocaleDateString()}
                </div>
              </div>
              {q.answer ? (
                <div className="text-sm bg-muted p-3 rounded-md">
                  {q.answer}
                </div>
              ) : (
                <div className="space-y-2">
                  <Textarea placeholder="Type your answer here..." />
                  <Button size="sm">Save Answer</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 