import { Router } from "express";
import { Authenticated } from "../middlewares/authenticationmiddleware";
import { createProfileController } from "../useCases/Profile/CreateProfile/Main";
import { deleteProfileController } from "../useCases/Profile/DeleteProfile/Main";
import { authenticated } from "../middlewares";


const router = Router();


router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => createProfileController.handle(request, response))


router.delete("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => deleteProfileController.handle(request, response))

export default router