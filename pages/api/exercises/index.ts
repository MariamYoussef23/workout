import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const exercises = await prisma.exercise.findMany()
    return res.status(200).json({ exercises });
  } catch (error) {
    console.log(error);
  }
}
