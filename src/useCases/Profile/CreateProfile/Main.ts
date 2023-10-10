import { PostgresProfileRepository } from "../../../respositories/implementations/PostgresProfileRepository";
import { ValidationCreateProfile } from "../../../services/validations/ProfileValidation/ValidationProfile";
import { CreateProfileController } from "./CreateProfileController";
import { CreateProfileUseCase } from "./CreateProfileUseCase";




const postgreProfileRepository = new PostgresProfileRepository()
const createProfileUseCase = new CreateProfileUseCase(postgreProfileRepository)
const createProfileValidation = new ValidationCreateProfile ()
const createProfileController = new CreateProfileController(createProfileUseCase,
createProfileValidation)

export { createProfileUseCase, createProfileController }

