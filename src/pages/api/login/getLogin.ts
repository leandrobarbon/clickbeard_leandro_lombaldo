import { getLoginDB } from "../db/login";

export default async (req:any, res:any) => {
    const getLogin = await getLoginDB()

    res.json ({ result: getLogin })
}