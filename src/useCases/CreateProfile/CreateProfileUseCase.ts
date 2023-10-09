import { IprofileRepository } from "../../respositories/IProfileRepository";
import { IprofileDTO } from "./CreateProfileDTO";

export class CreateProfileUseCase {
    
    constructor (
        private ProfileRepository: IprofileRepository
        
    ) {}

   async  execute (UserId: string, data: IprofileDTO) {

    await this.ProfileRepository.createProfile (UserId, data)

    


        
    }
}