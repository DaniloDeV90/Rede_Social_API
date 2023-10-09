import { Router } from "express";
import { Authenticated } from "../middlewares/authenticationmiddleware";
import { createProfileController } from "../useCases/CreateProfile/Main";
import { deleteProfileController } from "../useCases/DeleteProfile/Main";
import { authenticated } from "../middlewares";


const router = Router();


router.post("/", authenticated.isAuthenticated, (request, response) => createProfileController.handle(request, response))


router.delete("/", authenticated.isAuthenticated, (request, response) => deleteProfileController.handle(request, response))

export default router