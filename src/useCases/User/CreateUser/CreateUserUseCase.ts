
import { IusersRespository } from "../../../respositories/IUserRespository";

import { IcreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../../entities/User";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { IAuthenticatedRepository } from "../../../respositories/IAuthenticatedRepository";


export class CreateUserUseCase {


    constructor(private UserResporitory: IusersRespository,
        private AuthenticatedRepository: IAuthenticatedRepository) { }


    async execute(data: IcreateUserRequestDTO) {

        const verifyEmail = await this.UserResporitory.findByEmail(data.email)


        if (verifyEmail) throw new CustomErrror("Este Email já existe", 408)

        const user = new User(data)

        const newUser = await this.UserResporitory.SaveUser(user)

        await this.AuthenticatedRepository.CreateToken(newUser.id as string)





    }

}