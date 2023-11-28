import { AuthenticationStrategy } from "../../middlewares/strategy"
import { GetCookie } from "./GetCookies"

export class SocketAuthentication {
    constructor (private strategyAuthentication: AuthenticationStrategy) {}

   async handle (cookies:string) {
        const token = GetCookie(cookies as string, "userProfile")
        const id = await this.strategyAuthentication.execute(token as string)
 
        return id
    }
}