import { IusersRespository } from "../../respositories/IUserRespository";
import { IloginDTO } from "./LoginDTO";

import { User } from "../../entities/User";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import BcryptCompare from "../../utils/functions/BcryptCompare";
import CreateToken from "../../utils/functions/CreateToken";
import { IRedisRepository } from "../../respositories/IRedisRepository";
export class LoginUseCase {

    constructor(private UserRepository: IusersRespository,
        private redisRepository: IRedisRepository
    ) { }


    async handle(data: IloginDTO) {


        const Login = await this.UserRepository.findByEmail(data.email)
        if (!Login) throw new CustomErrror("Senha ou Email incorretos", 403)
        if (!await BcryptCompare(data.password, Login.password)) throw new CustomErrror("Senha ou Email incorretos", 408)
        const user = new User(Login)
        const token = CreateToken(user.id as string)
        const login = await this.UserRepository.UpdateUser(user.id as string, { Token: token })
        await this.redisRepository.set(`user-${login.id as string}`, token)


        
        return login



    }

}