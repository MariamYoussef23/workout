import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const workoutLines = await prisma.userLog.findMany();
    const records = workoutLines.map((exercise)=> {
      
    })

   
    return res.status(200).json({ records });
  } catch (error) {
    console.log(error);
  }
}

//squats 2
//seated leg press  6
//deumbell crunch 8
//deadlift 7
