// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



async function main() {
  console.log("Starting database seeding...");

  // Optional: Clean up existing data if needed (order matters due to relations)
  await prisma.userSkill.deleteMany();
  await prisma.reflectiveQuestion.deleteMany();
  await prisma.streak.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.user.deleteMany();

  // Create a dummy user
  const user = await prisma.user.create({
    data: {
      email: "dummy@user.com",
      name: "Dummy User",
      xp: 100, // Starting XP for leaderboard demonstration
    },
  });
  console.log("Created user:", user);

  // Create a streak record for the dummy user
  const streak = await prisma.streak.create({
    data: {
      currentCount: 3, // e.g., the user has a current streak of 3 days
      lastActive: new Date(), // set to now
      user: { connect: { id: user.id } },
    },
  });
  console.log("Created streak:", streak);

  // Create some reflective questions with answers
  const reflectiveQuestions = await prisma.reflectiveQuestion.createMany({
    data: [
      {
        question: "What did you learn today?",
        answer: "I learned how to seed a database with Prisma.",
        userId: user.id,
      },
      {
        question: "What challenged you the most today?",
        answer: "Designing an efficient API route.",
        userId: user.id,
      },
    ],
  });
  console.log("Created reflective questions:", reflectiveQuestions);

  // Create some skills
  const skillJS = await prisma.skill.create({
    data: {
      name: "JavaScript",
    },
  });
  const skillReact = await prisma.skill.create({
    data: {
      name: "React",
    },
  });
  console.log("Created skills:", skillJS, skillReact);

  // Create the skill mapping for the dummy user
  const userSkills = await prisma.userSkill.createMany({
    data: [
      {
        xp: 50, // XP points for JavaScript skill
        userId: user.id,
        skillId: skillJS.id,
      },
      {
        xp: 30, // XP points for React skill
        userId: user.id,
        skillId: skillReact.id,
      },
    ],
  });
  console.log("Created user skills mapping:", userSkills);

  console.log("Seeding complete.");
}

main()
  .catch((error) => {
    console.error("Error during seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
