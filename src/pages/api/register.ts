import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { prismaClient } from 'config/prisma';
import { User } from 'models/user';

const registerHandler = async (request: NextApiRequest, response: NextApiResponse) => {
   const data = request.body;

   const hasAlreadyExist = await prismaClient.user.findFirst({ where: { email: data.email } })

   if (hasAlreadyExist) {
      return response.status(404).json({ success: false, error: { message: 'User already exist' } })
   }

   const hashPassword = await bcrypt.hash(data.password, 10);

   const createdUser = await prismaClient.user.create({
      data: {
         ...data,
         password: hashPassword
      }
   })

   return response.status(200).json({
      id: createdUser.id
   });
}

export default registerHandler