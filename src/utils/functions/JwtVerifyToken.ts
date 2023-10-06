import jwt from "jsonwebtoken"
import ErrorLogin from "../../errors/ErrosLogin/LoginErrors"


export default (token: string) => {

    try {


        const Token = jwt.verify(token, process.env.TOKEN as string) as jwt.JwtPayload

        return Token



    } catch (e) {
        throw new ErrorLogin("Token inválido!", 401)
    }


}