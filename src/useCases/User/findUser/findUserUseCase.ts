import { IusersRespository } from "../../../respositories/IUserRespository";
import { findUserDTO } from "./findUserDTO";

export class FindUserUseCase {
    constructor(private IusersRespository: IusersRespository) { }

    async execute(user: findUserDTO) {
        return await this.IusersRespository.findByEmail(user.email)
    }
}