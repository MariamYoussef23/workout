import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const workoutLines = await prisma.workoutLine.findMany()
    return res.status(200).json({ workoutLines });
  } catch (error) {
    console.log(error);
  }
}
