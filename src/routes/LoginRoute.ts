import { Router } from "express";
import Login from "../controllers/Login/Login";


const router = Router ()

router.post ("/",Login.login )

export default router 