import express from 'express';
import prismaClient from '../../../../packages/db/client';

const router = express.Router();
const prisma = prismaClient;

router.post('/', async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, birthDate,
      goals, experience, preferences
    } = req.body;

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        birthDate: new Date(birthDate),
        goals,
        experience,
        notifications: preferences.notifications,
        reminders: preferences.reminders,
        privacy: preferences.privacy,
      }
    });

    res.status(201).json({
      message: "User created Successfully!",
      user: newUser
    });
  } catch (error: any) {
    console.error('Onboarding error:', error);
    res.status(500).json({ error: error.message || 'Failed to create user' });
  }
});

export default router;
