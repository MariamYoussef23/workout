// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      });

      return res.status(200).json({ user });
    } catch (error) {
      console.log(error);
    }
  }
}
