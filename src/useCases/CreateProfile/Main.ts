import { PostgresProfileRepository } from "../../respositories/implementations/PostgresProfileRepository";
import { CreateProfileController } from "./CreateProfileController";
import { CreateProfileUseCase } from "./CreateProfileUseCase";




const postgreProfileRepository = new PostgresProfileRepository ()
const createProfileUseCase =  new CreateProfileUseCase (postgreProfileRepository)

const createProfileController = new CreateProfileController (createProfileUseCase)

export {createProfileUseCase, createProfileController}

