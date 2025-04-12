import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  icon: string
  description: string
  color: string
}

export default function CategoryCard({ title, icon, description, color }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`p-6 ${color}`}>
        <div className="text-4xl">{icon}</div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link href={`/courses?category=${title.toLowerCase()}`} className="flex items-center text-sm font-medium">
            Explore courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
