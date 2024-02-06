import { Router, request, response } from "express";
import { createProfileController } from "../useCases/Profile/CreateProfile/Main";
import { deleteProfileController } from "../useCases/Profile/DeleteProfile/Main";
import { authenticated } from "../middlewares";
import { findProfileController } from "../useCases/Profile/FindProfile";


const router = Router();


router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => createProfileController.handle(request, response))


router.delete("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => deleteProfileController.handle(request, response))


router.get("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => findProfileController.handle(request, response))


export default router