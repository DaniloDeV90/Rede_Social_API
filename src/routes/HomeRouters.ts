import {Router} from "express"
import Home from "../controllers/Home/Home";
import Login from "../middlewares/Login";

const router = Router ();

router.get ("/",Login.Add, Home.home)

export default router