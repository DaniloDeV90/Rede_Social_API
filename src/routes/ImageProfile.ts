import { Router } from "express";

import { authenticated } from "../middlewares";
import { addImagemMulterController } from "../useCases/Profile/AddImageProfile";





const router = Router();



router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => addImagemMulterController.handle(request, response))




export default router;