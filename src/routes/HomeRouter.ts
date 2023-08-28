import {Router} from "express"
import Home from "../controllers/Home/Home";

const router = Router ();

router.get ("/", Home.home)
export default router