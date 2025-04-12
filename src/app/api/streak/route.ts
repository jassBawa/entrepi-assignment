// pages/api/streak/index.js

import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const DUMMY_USER_ID = 1;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
      try {
      const streak = await prisma.streak.findUnique({
        where: { userId: DUMMY_USER_ID },
      });
      return res.status(200).json(streak);
    } catch (error) {
      console.error('Error fetching streak:', error);
      return res.status(500).json({ error: 'Unable to fetch streak data.' });
    }
  }

  if (req.method === 'POST') {
    const { activityDate } = req.body;
    try {
      let currentStreak = await prisma.streak.findUnique({
        where: { userId: DUMMY_USER_ID },
      });

      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      // Compare dates in a simplified way. For production, consider using a robust date library.
      if (
        currentStreak &&
        new Date(currentStreak.lastActive).toDateString() ===
          yesterday.toDateString()
      ) {
        currentStreak = await prisma.streak.update({
          where: { userId: DUMMY_USER_ID },
          data: {
            currentCount: currentStreak.currentCount + 1,
            lastActive: new Date(activityDate),
          },
        });
      } else {
        if (currentStreak) {
          currentStreak = await prisma.streak.update({
            where: { userId: DUMMY_USER_ID },
            data: {
              currentCount: 1,
              lastActive: new Date(activityDate),
            },
          });
        } else {
          currentStreak = await prisma.streak.create({
            data: {
              currentCount: 1,
              lastActive: new Date(activityDate),
              user: { connect: { id: DUMMY_USER_ID } },
            },
          });
        }
      }

      return res.status(200).json(currentStreak);
    } catch (error) {
      console.error('Error updating streak:', error);
      return res.status(500).json({ error: 'Error updating streak.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
