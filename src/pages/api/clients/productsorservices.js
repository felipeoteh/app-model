import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function ProductsOrServices (req, res) {

    const { token } = req.query

    if (token === token){
        const ProductsOrServices = await prisma.productsOrServices.findMany({
            take: 1,
            where: { 
                slugClient: {
                    contains: token,
                }, 
            }, 
        })        
        res.json(ProductsOrServices)
    }   else{
        res.json({ msg: "vc não está autorizado", client })
    }     

}