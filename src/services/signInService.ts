import axios from 'axios'


export const signInService = async (email: string, password: string) => {   
   const response:any = axios.post('/api/login', { email, password })
   return response
}