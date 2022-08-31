import { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from 'config/prisma';
import { User } from 'models/user';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {

   if (request.method === 'GET') {
      const users = await prismaClient.user.findMany();

      return response.json(users)
   }

   if (request.method == 'POST') {
      const data = request.body;
      console.log(data)

      const userCreated = await prismaClient.user.create({
         data: {
            ...data
         }
      });

      return response.status(200).json({ ...userCreated })
   }

   return response.json({})

}

export default handler