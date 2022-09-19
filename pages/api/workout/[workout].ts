import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const workout = +req.query.workout!;
    const workoutData = await prisma.workoutLine.findUnique({ where: { id: workout } });
    return res.status(200).json({ workoutData });
  } catch (error) {
    console.log(error);
  }
}
