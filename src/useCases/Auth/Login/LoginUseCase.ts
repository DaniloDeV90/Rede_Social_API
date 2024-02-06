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

        const User = await this.UserRepository.findByEmail(data.email)

        if (!User) throw new CustomErrror("Senha ou Email incorretos", 401)
        if (!await BcryptCompare(data.password, User.password)) throw new CustomErrror("Senha ou Email incorretos", 401)


        const token = CreateToken(User.id as string)


        await this.redisRepository.set(`user-${User.id as string}`, token)
    

        return token



    }

}