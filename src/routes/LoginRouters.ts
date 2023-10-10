import { Router } from "express";
import { loginController } from "../useCases/Auth/Login/Main";
import { logoutController } from "../useCases/Auth/Logout/Main";
import { authenticated } from "../middlewares";



const loginRouters = Router()

loginRouters.post("/", (request, response) => loginController.handle(request, response))


loginRouters.delete("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => logoutController.handle(request, response))


export { loginRouters } 