import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Trophy, ChevronRight } from "lucide-react"
import CategoryCard from "@/components/category-card"
import Image from "next/image"


export default function Home() {
  const categories = [
    {
      title: "Math",
      icon: "π",
      description: "Master mathematical concepts through interactive problems",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Data Analysis",
      icon: "📊",
      description: "Learn to analyze and interpret data effectively",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Computer Science",
      icon: "💻",
      description: "Explore algorithms, data structures, and computational thinking",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Programming & AI",
      icon: "🤖",
      description: "Build coding skills and understand artificial intelligence",
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "Science & Engineering",
      icon: "🔬",
      description: "Discover scientific principles and engineering concepts",
      color: "from-amber-500 to-orange-600",
    },
  ]

  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage with hands-on exercises and real-world applications that make complex concepts easy to understand.",
      icon: BookOpen,
    },
    {
      title: "Track Progress",
      description:
        "Monitor your learning journey with detailed analytics and visualizations of your improvement over time.",
      icon: Target,
    },
    {
      title: "Earn Rewards",
      description:
        "Unlock achievements, badges, and special content as you progress through your personalized learning path.",
      icon: Trophy,
    },
  ]

  const testimonials = [
    {
      quote:
        "This platform transformed how I approach problem-solving. The interactive exercises make learning enjoyable and effective.",
      author: "Alex Johnson",
      role: "Computer Science Student",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I've tried many learning platforms, but this one stands out with its practical approach and engaging content.",
      author: "Sarah Chen",
      role: "Data Scientist",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "The progress tracking feature keeps me motivated. I can clearly see my improvement over time.",
      author: "Michael Rodriguez",
      role: "Engineering Professional",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span>Over 10,000 active learners</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              Learn
              <br />
              by doing
            </h1>
            <p className="max-w-[700px] text-slate-600 dark:text-slate-400 text-xl md:text-2xl leading-relaxed">
              Interactive problem solving that's effective and fun.
              <span className="block mt-2">Get smarter in 15 minutes a day.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-emerald-600/20 dark:shadow-emerald-600/20 transition-all duration-300 hover:scale-105"
              >
                <Link href="/dashboard">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-8 h-14 text-lg"
              >
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
            <div className="mt-16 w-full max-w-4xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-black/40 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-slate-500 dark:text-slate-400">Interactive learning platform preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why our approach works
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
              Our platform combines proven learning methods with modern technology to create an effective and engaging
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 w-fit">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 flex-grow">{feature.description}</p>
                <div className="mt-6">
                  <Link
                    href={`/features/${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Topics</h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
              Discover a wide range of subjects tailored to your interests and learning goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              View all topics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Learners Say
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
              Join thousands of satisfied learners who have transformed their skills with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-emerald-600 dark:bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold">10k+</span>
              <span className="text-emerald-100 mt-2">Active Learners</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold">500+</span>
              <span className="text-emerald-100 mt-2">Interactive Exercises</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold">95%</span>
              <span className="text-emerald-100 mt-2">Satisfaction Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold">24/7</span>
              <span className="text-emerald-100 mt-2">Learning Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-6">
              <Trophy className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Ready to start learning?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Join thousands of learners who are building their skills every day. Your journey to mastery starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-emerald-600/20 dark:shadow-emerald-600/20 transition-all duration-300 hover:scale-105"
              >
                <Link href="/dashboard">
                  Start your streak today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-8 h-14 text-lg"
              >
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

 function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col h-full">
      <div className="mb-6">
        <svg
          width="45"
          height="36"
          className="text-emerald-500 opacity-30"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V13.5C0 6.04416 6.04416 0 13.5 0ZM40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V13.5C27 6.04416 33.0442 0 40.5 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-slate-700 dark:text-slate-300 flex-grow mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-slate-900 dark:text-white">{author}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
