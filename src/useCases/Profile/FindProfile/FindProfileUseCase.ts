
import { IprofileRepository } from "../../../respositories/IProfileRepository";

import { findProdileDTO } from "./FindProfileDTO";

export class FindProfileUseCase {
    constructor( private IprofileRepository: IprofileRepository) { }


    async execute(profileDTO: findProdileDTO) {

        const profile =  await this.IprofileRepository.findProfile(profileDTO.id_cadastro)

        return profile


    }
}