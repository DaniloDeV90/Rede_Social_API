import { IusersRespository } from "../../../respositories/IUserRespository";
import { IloginDTO } from "./LoginDTO";


import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import BcryptCompare from "../../../utils/functions/BcryptCompare";
import CreateToken from "../../../utils/functions/CreateToken";
import { IRedisRepository } from "../../../respositories/IRedisRepository";
import { IAuthenticatedRepository } from "../../../respositories/IAuthenticatedRepository";
export class LoginUseCase {

    constructor(private UserRepository: IusersRespository,
        private redisRepository: IRedisRepository,
        private TokenRepository: IAuthenticatedRepository
    ) { }


    async execute(data: IloginDTO) {

        const Login = await this.UserRepository.findByEmail(data.email)
        if (!Login) throw new CustomErrror("Senha ou Email incorretos", 408)
        if (!await BcryptCompare(data.password, Login.password)) throw new CustomErrror("Senha ou Email incorretos", 408)


        const token = CreateToken(Login.id as string)
        const NewTokenGenerate = await this.TokenRepository.UpdatedToken(Login.id as string, token)

        await this.redisRepository.set(`user-${Login.id as string}`, token)


        return NewTokenGenerate.token



    }

}