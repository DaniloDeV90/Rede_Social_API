import { IusersRespository } from "../../../respositories/IUserRespository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(private UserRepository: IusersRespository) { }


    async execute(idUser: IDeleteUserDTO) {


        await this.UserRepository.deleteUser(idUser.IdUser)
    }
}