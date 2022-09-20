// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, password, gender, weight, height } =
        req.body;
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
          gender,
          weight,
          height,
        },
      });

      
      return res.status(200).json({ user });
    } catch (error) {
      console.log(error);
    }
  }
}
