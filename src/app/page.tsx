import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CategoryCard from "@/components/category-card"

export default function Home() {
  const categories = [
    {
      title: "Math",
      icon: "π",
      description: "Master mathematical concepts through interactive problems",
      color: "bg-blue-100 dark:bg-blue-950",
    },
    {
      title: "Data Analysis",
      icon: "📊",
      description: "Learn to analyze and interpret data effectively",
      color: "bg-orange-100 dark:bg-orange-950",
    },
    {
      title: "Computer Science",
      icon: "💻",
      description: "Explore algorithms, data structures, and computational thinking",
      color: "bg-purple-100 dark:bg-purple-950",
    },
    {
      title: "Programming & AI",
      icon: "🤖",
      description: "Build coding skills and understand artificial intelligence",
      color: "bg-pink-100 dark:bg-pink-950",
    },
    {
      title: "Science & Engineering",
      icon: "🔬",
      description: "Discover scientific principles and engineering concepts",
      color: "bg-green-100 dark:bg-green-950",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-950">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative w-full max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Learn
                <br />
                by doing
              </h1>
              <div className="absolute top-0 right-0 -mt-4 md:mt-0 md:right-0">
                <div className="w-16 h-16 rounded-full bg-orange-400 opacity-80 blur-sm"></div>
              </div>
              <div className="absolute bottom-0 right-1/4 -mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 opacity-80 blur-sm"></div>
              </div>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Interactive problem solving that's effective and fun.
              <br />
              Get smarter in 15 minutes a day.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/dashboard">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className=" px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                description={category.description}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className=" px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Build a learning habit</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Our streak feature helps you stay consistent with your learning. Complete at least one lesson every day
                to maintain your streak and watch your knowledge grow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                  <span>Track your daily progress</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                  <span>Earn streak badges and rewards</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                  <span>Build consistent learning habits</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[300px] rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-emerald-500">7</div>
                    <div className="text-xl font-medium mt-2">Day Streak</div>
                    <div className="flex justify-center mt-4 space-x-1">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to start learning?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of learners who are building their skills every day.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/dashboard">
                  Start your streak today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
