import { User } from 'models/user';
import axios from "axios";



export const createBarberService = async (user: User) => {
   const response = await axios.post('/api/user', { ...user });
   return response
}