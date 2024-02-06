
import { IRedisRepository } from "../../../respositories/IRedisRepository";

import { ILogoutDTO } from "./LogoutDTO";

export class LogoutUseCase {

    constructor(private redisRepository: IRedisRepository) { }

    async execute(IdUser: ILogoutDTO) {
        await this.redisRepository.del(`user-${IdUser as string}`)
    }
}