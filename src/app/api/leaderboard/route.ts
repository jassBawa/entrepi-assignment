// pages/api/leaderboard/index.js

import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // Retrieve all users, sorted by xp descending.
      const users = await prisma.user.findMany({
        orderBy: {
          xp: 'desc'
        },
        select: { id: true, name: true, xp: true } // Returning only essential data
      });
      return res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      return res.status(500).json({ error: "Unable to fetch leaderboard data." });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
