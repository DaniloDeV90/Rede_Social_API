
import { IusersRespository } from "../../../respositories/IUserRespository";

import { IcreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../../entities/User";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { IAuthenticatedRepository } from "../../../respositories/IAuthenticatedRepository";
import CreateToken from "../../../utils/functions/CreateToken";


export class CreateUserUseCase {


    constructor(private UserResporitory: IusersRespository,
        private AuthenticatedRepository: IAuthenticatedRepository) { }


    async execute(data: IcreateUserRequestDTO) {

        const verifyEmail = await this.UserResporitory.findByEmail(data.email)
        if (verifyEmail) throw new CustomErrror("Este Email já existe", 408)
        const user = new User(data)
        const newUser = await this.UserResporitory.SaveUser(user)
        
        const token = CreateToken(newUser.id as string)
        return await this.AuthenticatedRepository.SaveToken(newUser.id as string, token)
        



    }

}