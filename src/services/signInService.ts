import axios from 'axios'


export const signInService = async (email: string, password: string) => {
   const response = axios.post('/api/login', { email, password })
   return response
}