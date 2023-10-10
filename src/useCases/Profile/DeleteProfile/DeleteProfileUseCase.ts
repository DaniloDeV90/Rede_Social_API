import { IprofileRepository } from "../../../respositories/IProfileRepository";
import { IdeleteProfileDTO } from "./DeleteProfileDTO";

export class DeleteProfileUseCase {

    constructor(private ProfileRepository: IprofileRepository) { }
    async execute(id: IdeleteProfileDTO) {

        await this.ProfileRepository.deleteProfile(id)

    }
}