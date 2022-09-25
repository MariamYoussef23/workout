import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { workoutLineId, userId, Weights, Reps, setNo } = req.body
  try {
    const values = await prisma.userLog.create({
      data: {
        workoutLineId, userId, Weights, setNo, Reps
      }
    })
  } catch (error) {
    console.log(error);
  }
}
