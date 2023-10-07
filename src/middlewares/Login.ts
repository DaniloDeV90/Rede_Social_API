import { Request, Response, NextFunction } from "express"
import token from "jsonwebtoken"
import { redisClient } from "../utils/config/RedisConfig"
import JwtVerifyToken from "../utils/functions/JwtVerifyToken"
import CustomErrror  from "../errors/ErrosLogin/CustomError"

declare module "express" {
    interface Request {
        userId?: string
    }
}
class LoginMiddleware {

    async Add(req: Request, res: Response, next: NextFunction) {

        const authorization = req.cookies.ProfileCookie

        if (!authorization) return res.status(404).json("Sem token")
        try {


            const verificar = JwtVerifyToken(authorization)

            const tokenClient = await redisClient.get("user-" + verificar.id)

            if (tokenClient != authorization) throw new CustomErrror ("Essa sessão foi encerrada", 401)

            req.userId = verificar.id

            return next()


        } catch (e) {

            if (e instanceof CustomErrror) {
                res.status(e.codigo).json({ status: "error", message: e.mensagem })
            } else {
                res.status(500).json({ status: "error", message: "erro interno" })
            }
        }


    }





}

export default new LoginMiddleware();