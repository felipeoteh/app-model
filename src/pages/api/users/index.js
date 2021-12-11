import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Users (req, res) {

    const { email } = req.query

    const userAuth = await prisma.users.findMany({
            take: 1,
            where: { 
                email: {
                    contains: email,
                }, 
            }, 
        })        
    res.json(userAuth)    

}