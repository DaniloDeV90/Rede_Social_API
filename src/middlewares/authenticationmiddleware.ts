import { Request, Response, NextFunction } from "express"
import { AuthenticationStrategy } from "./strategy"


declare module "express" {
    interface Request {
        userId?: string
    }
}
export class Authenticated {

    private authenticationStrategy: AuthenticationStrategy
    constructor(authenticationStrategy: AuthenticationStrategy) { this.authenticationStrategy = authenticationStrategy }


    async isAuthenticated(req: Request, res: Response, next: NextFunction) {

        const a = await this.authenticationStrategy.execute()

        console.log(a)


    }
}

