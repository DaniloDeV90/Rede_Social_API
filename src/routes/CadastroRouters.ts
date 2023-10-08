import { Router } from "express";
import { createUserController } from "../useCases/CreateUser/Main";
createUserController
const router = Router();




router.post("/", (request, response) => createUserController.handle(request, response))
// router.delete ("/", CadastroController.delete)


export default router;