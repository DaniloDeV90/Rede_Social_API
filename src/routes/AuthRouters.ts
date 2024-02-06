import { Router } from "express";
import { authenticated } from "../middlewares";
import { isAuthenticatedController } from "../useCases/Auth/isAuthenticated";


const router = Router();




router.get("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => isAuthenticatedController.handle(request, response))


export default router;