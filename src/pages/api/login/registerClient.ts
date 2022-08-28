import { registerClientDB } from "../db/login";

export default async (req:any, res: any) => {
    const { r_name, r_email, r_password } = req.body

    const registerClient = await registerClientDB(r_name, r_email, r_password)

    res.json ({result: registerClient })
}