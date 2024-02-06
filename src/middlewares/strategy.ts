
import CustomError from "../errors/ErrosLogin/CustomError";

import { IRedisRepository } from "../respositories/IRedisRepository";
import JwtVerifyToken from "../utils/functions/JwtVerifyToken";



export class AuthenticationStrategy {
    constructor(private RedisRepository: IRedisRepository) { }

    async execute(tokenIsValid: string) {

        const token = JwtVerifyToken(tokenIsValid)

        const tokenValid = await this.RedisRepository.get(`user-${token.id}`)

        if (tokenIsValid != tokenValid) throw new CustomError("Essa sessão ja foi encerrada!", 401)
        return token




    }
}