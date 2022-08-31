import axios from "axios"

export const getAllBarbersService = async () => {
   return await axios.get('/api/user')
}