import { Router } from "express";
import { CreateRegisterController } from "../controllers/Register/createRegister/createRegister";

const createReguisterController = new CreateRegisterController ()
const router = Router ();


router.post ("/", createReguisterController.handle)
// router.delete ("/", CadastroController.delete)


export default router;