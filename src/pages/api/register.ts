import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { prismaClient } from 'config/prisma';
import { User } from 'models/user';

const registerHandler = async (request: NextApiRequest, response: NextApiResponse) => {
   const data = request.body as User;

   const hasAlreadyExist = await prismaClient.user.findFirst({ where: { email: data.email } })

   if (hasAlreadyExist) {
      return response.status(404).json({ success: false, error: { message: 'User already exist' } })
   }

   const hashPassword = await bcrypt.hash(data.password, 10);

   const isAdmin = data.email.includes('admin@admin');
   const isClient = !data.email.includes('admin@admin');

   const createdUser = await prismaClient.user.create({
      data: {
         ...data,
         isAdmin,
         isClient,
         password: hashPassword
      }
   })

   const token = 'dea05daab3a5fd8fce42be4a786cd4544c630b38d03b42e90a222ff066619004e0b376724c630b38d03b42e90a222ff066619004e0b37672'

   return response.status(200).json({
      user: createdUser,
      token
   });
}

export default registerHandler