// pages/api/skills/index.js

import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

const DUMMY_USER_ID = 1;

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // List all skills along with the dummy user's XP in each skill
      const skills = await prisma.userSkill.findMany({
        where: { userId: DUMMY_USER_ID },
        include: { skill: true }
      });
      return res.status(200).json(skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
      return res.status(500).json({ error: "Unable to fetch skills." });
    }
  }

  if (req.method === "POST") {
    // Expecting to update the XP for a specific skill
    // For example, { skillId: 2, earnedXp: 10 }
    const { skillId, earnedXp } = req.body;
    try {
      // Find the user-skill record
      const userSkill = await prisma.userSkill.findFirst({
        where: { userId: DUMMY_USER_ID, skillId }
      });
      let updatedUserSkill;
      if (userSkill) {
        // Update the xp
        updatedUserSkill = await prisma.userSkill.update({
          where: { id: userSkill.id },
          data: { xp: userSkill.xp + earnedXp }
        });
      } else {
        // If the record doesn’t exist, create one
        updatedUserSkill = await prisma.userSkill.create({
          data: {
            xp: earnedXp,
            user: { connect: { id: DUMMY_USER_ID } },
            skill: { connect: { id: skillId } }
          }
        });
      }
      return res.status(200).json(updatedUserSkill);
    } catch (error) {
      console.error("Error updating skill XP:", error);
      return res.status(500).json({ error: "Unable to update skill XP." });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
