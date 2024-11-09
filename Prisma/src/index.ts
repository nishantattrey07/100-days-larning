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

async function updateUser(email: string, password: string, firstname: string, lastname: string) { 
    const res = await prisma.user.update({
        where: { email },
        data: {
            firstname,
            lastname,
            password
        }
    })
    console.log(res);
    
}


async function changeEmail(email: string, newEmail: string) { 
    const res = await prisma.user.update({
        where: { email },
        data: {
            email:newEmail
        }
    })
    console.log(res);
}

async function userDetails(email: string) { 
    const res = await prisma.user.findFirst({
        where: { email }
    })
    console.log(res);
}

// changeEmail("user1@email.com", "admin@email.com");
// updateUser("user1@email.com", "adminpass", "Nishant", "Attrey");
// console.log(insertUser("user2@email.com", "password", "user2", ""));
userDetails("user2@email.com")
 