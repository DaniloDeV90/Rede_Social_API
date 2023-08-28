import { Request, Response, NextFunction } from "express"
import { prismaClient } from "../databse"
import token from "jsonwebtoken"
declare module "express" {
    interface Request {
        userId?: string
    }
}
class LoginMiddleware {


    async Add(req: Request, res: Response, next: NextFunction) {


        const { authorization } = req.headers
        if (!authorization) return res.status(404).json("Sem token")
        try {
            const verificar: token.JwtPayload = token.verify(authorization, process.env.TOKEN as string) as token.JwtPayload

            const user = await prismaClient.cadastro.findUnique ( {
                where: {
                    id: verificar.id
                }
            })
 
            if (!user) return res.json ("token inválido!!")
            req.userId = user?.id
            

            return next ()


        } catch (e) {

            res.json ({errors: "token inválido!"})
        }

     
    }





}

export default new LoginMiddleware();