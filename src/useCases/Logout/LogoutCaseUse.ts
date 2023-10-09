import { IAuthenticatedRepository } from "../../respositories/IAuthenticatedRepository";

import { ILogoutDTO } from "./LogoutDTO";

export class LogoutUseCase {

    constructor(private AuthenticationRepository: IAuthenticatedRepository) { }

    async execute(IdUser: ILogoutDTO) {

        this.AuthenticationRepository.delete(IdUser)
    }
}