import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const workouts = await prisma.workout.findMany()
    return res.status(200).json({ workouts });
  } catch (error) {
    console.log(error);
  }
}
