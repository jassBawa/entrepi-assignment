import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.reflection.deleteMany()
  await prisma.reflectiveQuestion.deleteMany()
  await prisma.lessonCompletion.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.course.deleteMany()
  await prisma.streak.deleteMany()
  await prisma.user.deleteMany()

  // Create users with different XP and streak counts
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
        xp: 1500,
        streak: {
          create: {
            currentCount: 7,
            lastActiveOn: new Date(),
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        xp: 1200,
        streak: {
          create: {
            currentCount: 5,
            lastActiveOn: new Date(Date.now() - 86400000), // Yesterday
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        xp: 900,
        streak: {
          create: {
            currentCount: 3,
            lastActiveOn: new Date(Date.now() - 2 * 86400000), // 2 days ago
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: "Sarah Williams",
        email: "sarah.williams@example.com",
        xp: 2000,
        streak: {
          create: {
            currentCount: 10,
            lastActiveOn: new Date(),
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        name: "David Brown",
        email: "david.brown@example.com",
        xp: 800,
        streak: {
          create: {
            currentCount: 2,
            lastActiveOn: new Date(Date.now() - 3 * 86400000), // 3 days ago
          },
        },
      },
    }),
  ])

  // Create courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: "Physics Fundamentals",
        description: "A comprehensive course covering fundamental physics concepts",
        lessons: {
          create: [
            {
              title: "Introduction to Quantum Mechanics",
              content: "Learn the fundamentals of quantum physics and its applications",
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: "Mathematics Mastery",
        description: "Advanced mathematical concepts and problem-solving techniques",
        lessons: {
          create: [
            {
              title: "Advanced Calculus",
              content: "Master advanced mathematical concepts and problem-solving techniques",
            }
          ]
        }
      },
    }),
    prisma.course.create({
      data: {
        title: "Computer Science Essentials",
        description: "Core concepts in computer science and programming",
        lessons: {
          create: [
            {
              title: "Machine Learning Fundamentals",
              content: "Understand the basics of machine learning and artificial intelligence",
            }
          ]
        }
      },
    }),
  ])

  // Get all lessons
  const lessons = await prisma.lesson.findMany()

  // Create lesson completions for some users
  await Promise.all([
    prisma.lessonCompletion.create({
      data: {
        userId: users[0].id,
        lessonId: lessons[0].id,
        completedAt: new Date(),
      },
    }),
    prisma.lessonCompletion.create({
      data: {
        userId: users[0].id,
        lessonId: lessons[1].id,
        completedAt: new Date(),
      },
    }),
    prisma.lessonCompletion.create({
      data: {
        userId: users[1].id,
        lessonId: lessons[0].id,
        completedAt: new Date(),
      },
    }),
  ])

  // Create reflective questions for each lesson
  const questions = await Promise.all([
    // Questions for Quantum Mechanics
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[0].id,
        question: "What is wave-particle duality?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[0].id,
        question: "How does the uncertainty principle affect our understanding of particles?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[0].id,
        question: "What are some real-world applications of quantum mechanics?",
      },
    }),
    // Questions for Calculus
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[1].id,
        question: "What is the difference between differentiation and integration?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[1].id,
        question: "How would you explain the concept of limits to a beginner?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[1].id,
        question: "What are some practical applications of calculus in real life?",
      },
    }),
    // Questions for Machine Learning
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[2].id,
        question: "What is the difference between supervised and unsupervised learning?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[2].id,
        question: "How do neural networks learn from data?",
      },
    }),
    prisma.reflectiveQuestion.create({
      data: {
        lessonId: lessons[2].id,
        question: "What are some ethical considerations in machine learning?",
      },
    }),
  ])

  // Create some reflections for demonstration
  await Promise.all([
    prisma.reflection.create({
      data: {
        userId: users[0].id,
        questionId: questions[0].id,
        answer: "Wave-particle duality is the concept that particles can exhibit both wave-like and particle-like properties.",
      },
    }),
    prisma.reflection.create({
      data: {
        userId: users[1].id,
        questionId: questions[3].id,
        answer: "Differentiation finds the rate of change, while integration finds the accumulation of quantities.",
      },
    }),
    prisma.reflection.create({
      data: {
        userId: users[2].id,
        questionId: questions[6].id,
        answer: "Supervised learning uses labeled data, while unsupervised learning finds patterns in unlabeled data.",
      },
    }),
  ])

  console.log("Seed data created successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
