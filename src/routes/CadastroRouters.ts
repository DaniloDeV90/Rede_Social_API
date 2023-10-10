import { Router } from "express";

import { authenticated } from "../middlewares";
import { deleteUserController } from "../useCases/User/DeleteUser/Index";
import { createUserController } from "../useCases/User/CreateUser/Main";

const router = Router();




router.post("/", (request, response) => createUserController.handle(request, response))


router.delete("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => deleteUserController.handle(request, response))


export default router;