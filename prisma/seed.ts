import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  // 1. Create a user
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      streak: {
        create: {
          currentCount: 1,
          lastActiveOn: new Date(),
        }
      }
    },
  })

  // console.log(`User created: ${user.id}`)

  // 2. Create a lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: "Intro to Probability",
      content: "This lesson introduces the basics of probability theory, including outcomes, events, and probability rules.",
    },
  })

  console.log(`Lesson created: ${lesson.id}`)

  // 3. Add reflective questions for that lesson
  const questions = await prisma.reflectiveQuestion.createMany({
    data: [
      {
        lessonId: lesson.id,
        question: "What real-world example can you think of where probability applies?",
      },
      {
        lessonId: lesson.id,
        question: "What part of this lesson did you find most challenging?",
      },
      {
        lessonId: lesson.id,
        question: "How would you explain probability to a friend?",
      },
    ],
  })

  console.log(`${questions.count} reflective questions added.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
