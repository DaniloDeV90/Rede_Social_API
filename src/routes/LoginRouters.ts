import { Router } from "express";




import { loginController } from "../useCases/Login/Main";
const router = Router ()

router.post ("/",  (request,response) => loginController.handle (request,response))

export default router 