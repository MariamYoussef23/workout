import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const id = +req.query.id!;
    const exercise = await prisma.exercise.findMany({
      where: { id },
    });
    return res.status(200).json({ exercise });
  } catch (error) {
    console.log(error);
  }
}
