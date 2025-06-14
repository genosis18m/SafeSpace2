import express from 'express';
import prismaClientClient from '../../../../packages/db/client';
import { authMiddleware } from '../middleware/authMiddleware';
import prismaClient from '../../../../packages/db/client';

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const user = req.user; // from middleware 
  const { mood, note, activities, date } = req.body;

  if (!mood || !date) {
    res.status(400).json({ message: 'Mood and date are required' });
  }

  try {
    const moodEntry = await prismaClient.mood.upsert({
      where: {
        userId_date: {
          userId: user!.id,
          date: new Date(date).toISOString()
        }
      },
      update: {
        mood,
        note,
        activities
      },
      create: {
        userId: user!.id,
        mood,
        note,
        activities,
        date: new Date(date)
      }
    });

    res.status(200).json(moodEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving mood entry' });
  }
});

export default router;
