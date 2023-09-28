import { Router } from "express";
import CadastroController from "../controllers/Cadastro/CadastroController";

const router = Router ();


router.post ("/", CadastroController.create )
router.delete ("/", CadastroController.delete)


export default router;