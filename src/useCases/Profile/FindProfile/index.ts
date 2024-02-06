import { PostgresProfileRepository } from "../../../respositories/implementations/PostgresProfileRepository";
import { FindProfileController } from "./FindProfileController";
import { FindProfileUseCase } from "./FindProfileUseCase";

const profileRepository = new PostgresProfileRepository ();

const findProfileUseCase = new FindProfileUseCase (profileRepository)

const findProfileController  = new FindProfileController (findProfileUseCase)

export {findProfileController, findProfileUseCase}