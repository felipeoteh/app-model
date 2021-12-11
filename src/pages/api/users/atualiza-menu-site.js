import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function AtualizaMenuSite (req, res) {

    const { id, email, valueMenu, valueLink } = req.body

    const atualizaMenu = await prisma.users.update({            
            where: { 
                email: {
                    contains: email,
                }, 
            },
            data: {
                theProducts: {
                    menu: {
                        name: valueMenu,
                        link: valueLink
                    }
                }
            }
        })        
    res.json(atualizaMenu)    

}