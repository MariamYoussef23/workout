import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const id = +req.query.workout!;
    const workoutData = await prisma.workoutLine.findMany({ where: { workoutId: id }, include: { exercise: true } });
    return res.status(200).json({ workoutData });
  } catch (error) {
    console.log(error);
  }
}


