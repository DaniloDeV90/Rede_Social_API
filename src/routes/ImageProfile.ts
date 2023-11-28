import { Router } from "express";

import { authenticated } from "../middlewares";
import { addImagemMulterController } from "../useCases/Profile/AddImageProfile";
import { deleteImageProfileController } from "../useCases/Profile/DeleteImageProfile";





const router = Router();



router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => addImagemMulterController.handle(request, response))



router.delete("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => deleteImageProfileController.handle(request, response))



export default router;