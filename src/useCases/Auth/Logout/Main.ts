import { PostgreAuthenticationRepostitory } from "../../../respositories/implementations/PostgreAuthenticationRepostitory";
import { LogoutUseCase } from "./LogoutCaseUse";
import { LogoutController } from "./LogoutController";


const postgresAuthenticatedRepository = new PostgreAuthenticationRepostitory()

const logoutUseCase = new LogoutUseCase(postgresAuthenticatedRepository)

const logoutController = new LogoutController(logoutUseCase)

export { logoutController, logoutUseCase }