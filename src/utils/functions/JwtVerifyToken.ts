import jwt from "jsonwebtoken"
import CustomError from "../../errors/ErrosLogin/CustomError"


export default (token: string) => {

    try {


        const Token = jwt.verify(token, process.env.TOKEN as string) as jwt.JwtPayload

        return Token



    } catch (e) {
        throw new CustomError("Token inválido!", 401)
    }


}