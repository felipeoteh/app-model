import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Sites (req, res) {

    const { token } = req.query

    if (token === token){
        const siteData = await prisma.sites.findMany({
            take: 1,
            where: { 
                slugClient: {
                    contains: token,
                }, 
            }, 
        })        
        res.json(siteData)
    }   else{
        res.json({ msg: "Você não está autorizado a essa rota! Necessita do Token!" })
    }     

}