
import { IusersRespository } from "../../respositories/IUserRespository";

import { IcreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import CustomErrror from "../../errors/ErrosLogin/CustomError";


export class CreateUserUseCase {


    constructor(private UserResporitory: IusersRespository) { }


    async execute(data: IcreateUserRequestDTO) {

        const verifyEmail = await this.UserResporitory.findByEmail(data.email)

        if (verifyEmail) throw new CustomErrror("Este Email já existe", 408)

        const user = new User(data)
        await this.UserResporitory.SaveUser(user)


    }

}