import { IRedisRepository } from "../../../respositories/IRedisRepository";
import { IusersRespository } from "../../../respositories/IUserRespository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(private UserRepository: IusersRespository, private rediRepository: IRedisRepository) { }


    async execute(idUser: IDeleteUserDTO) {

        await  this.rediRepository.del ( `user- ${idUser.IdUser} `  )
        await this.UserRepository.deleteUser(idUser.IdUser)
    }
}