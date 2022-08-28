import { prisma } from "./db";

export async function getLoginDB() {
    return prisma.public_login.findMany();
}

export async function registerClientDB( r_name: string, r_email: string, r_password: string) {
    return prisma.public_register.create({
        data: {
            r_name,
            r_email,
            r_password
        }
    })
}