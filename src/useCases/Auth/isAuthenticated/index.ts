import { IsauthenticatedController } from "./isAuthenticatedController";
import { IsAithenticatedUseCase } from "./isAuthenticatedUseCase";


const isAuthenticatedUseCase = new IsAithenticatedUseCase ()
const isAuthenticatedController = new IsauthenticatedController (isAuthenticatedUseCase)



export {isAuthenticatedController, isAuthenticatedUseCase}