import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function insertUser(email: string, password: string, firstname: string, lastname: string) {
    const user = await prisma.user.create({
        data: {
        email,
        password,
        firstname,
        lastname,
        },
    })
    return user
    
}

console.log(insertUser("user2@email.com", "password", "user2", ""));
 