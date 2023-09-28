import { Request, Response, NextFunction } from "express"
import token from "jsonwebtoken"
import { redisClient } from "../utils/config/RedisConfig"



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


            const JSONuser = await  redisClient.get ("user-" + verificar.id)

            const user = JSON.parse (JSONuser as string)
          
            if (user.Token != authorization) return res.json({ erros: "essa sessão foi encerrada" })
            if (!user) return res.json("token inválido!!")
            req.userId = user?.id


            return next()


        } catch (e) {

            res.json({ errors: "token inválido!" })
        }


    }





}

export default new LoginMiddleware();