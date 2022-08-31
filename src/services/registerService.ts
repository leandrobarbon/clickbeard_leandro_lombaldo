import { User } from 'models/user';
import axios from "axios";



export const registerService = async (user: User) => {
   const response = await axios.post('/api/register', { ...user })
   return response
}