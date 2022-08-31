import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { prismaClient } from 'config/prisma';


const login = async (request: NextApiRequest, response: NextApiResponse) => {
   const data = request.body;

   const user = await prismaClient.user.findFirst({ where: { email: data.email } });

   if (!user) return response.status(404).json({ success: false, error: { message: 'User does not exist' } })

   const isMatch = await bcrypt.compare(data.password, user.password as string);

   if (!isMatch) {
      return response.status(404).json({ success: false, error: { message: 'Invalid password' } })
   }

   const token = 'dea05daab3a5fd8fce42be4a786cd4544c630b38d03b42e90a222ff066619004e0b376724c630b38d03b42e90a222ff066619004e0b37672'

   return response.status(200).json({ user, token });
}

export default login