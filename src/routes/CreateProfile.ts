import { Router } from "express";
import Login from "../middlewares/Login";
import CreateProfileController from "../controllers/CreateProfile/CreateProfileController";

import FotoConfig from "../controllers/Fotos/FotoConfig";
import ImgProfile from "../controllers/ImageProfile/ImgProfile";


const router = Router ();


router.post ("/", Login.Add,CreateProfileController.Create )

router.post ("/imgprofile",Login.Add, ImgProfile.Create)

export default router