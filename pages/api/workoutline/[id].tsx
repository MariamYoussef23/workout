import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const id = +req.query.id!;
    const workoutLines = await prisma.workoutLine.findMany({
      where: { id },
      include: { exercise: true },
    });
    return res.status(200).json({ workoutLines });
  } catch (error) {
    console.log(error);
  }
}
