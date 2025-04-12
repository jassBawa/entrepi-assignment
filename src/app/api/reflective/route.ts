// pages/api/reflective/index.js
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const DUMMY_USER_ID = 1;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // Retrieve all reflective questions for the dummy user
      const questions = await prisma.reflectQuestion.findMany({
        where: { userId: DUMMY_USER_ID },
        orderBy: { date: 'desc' }
      });
      return res.status(200).json(questions);
    } catch (error) {
      console.error("Error fetching reflective questions:", error);
      return res.status(500).json({ error: "Unable to fetch reflective questions." });
    }
  }

  if (req.method === "POST") {
    const { question, answer } = req.body;
    try {
      const newEntry = await prisma.create({
        data: {
          question,
          answer,
          user: { connect: { id: DUMMY_USER_ID } }
        }
      });
      return res.status(200).json(newEntry);
    } catch (error) {
      console.error("Error saving reflective question:", error);
      return res.status(500).json({ error: "Unable to save reflective question." });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
