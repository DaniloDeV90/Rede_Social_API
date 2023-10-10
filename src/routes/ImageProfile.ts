import { Router } from "express";
import { addImagemMulterController } from "../useCases/Profile/AddImagemProfile";
import { authenticated } from "../middlewares";





const router = Router();



router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => addImagemMulterController.handle(request, response))




export default router;