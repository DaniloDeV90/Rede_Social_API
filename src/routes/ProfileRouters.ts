import { Router } from "express";
import Login from "../middlewares/Login";
import ImgProfile from "../controllers/ImageProfile/ImgProfile";
import Profile from "../controllers/Profile/Profile";


const router = Router ();


router.post ("/", Login.Add,Profile.Create )

router.post ("/imgprofile",Login.Add, ImgProfile.Create)

export default router