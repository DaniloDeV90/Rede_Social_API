import { Request, Response, NextFunction } from "express"
import { AuthenticationStrategy } from "./strategy"
import CustomError from "../errors/ErrosLogin/CustomError"


declare module "express" {
    interface Request {
        userId?: string
    }
}


export class Authenticated {

    constructor(private authenticationStrategy: AuthenticationStrategy) { }


    async isAuthenticated(req: Request, res: Response, next: NextFunction) {

        try {
        
            const token = await this.authenticationStrategy.execute(req.cookies.userProfile)

            req.userId = token.id
            next()

        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }
        }






    }
}

