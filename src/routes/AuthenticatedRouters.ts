import { Router } from "express";
import CadastroController from "../controllers/Cadastro/CadastroController";
import IsAuthenticated from "../controllers/isAuthenticated/IsAuthenticated";
import Login from "../middlewares/Login";


const router = Router ();


router.get ("/",Login.Add, IsAuthenticated.authenticated  )


export default router;