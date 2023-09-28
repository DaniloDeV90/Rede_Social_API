import { Router } from "express";

import FotosController from "../controllers/Fotos/FotosController";

import FotoNuvem from "../controllers/Fotos/FotoNuvemController";


const router = Router ();



router.post ("/nuvem",FotoNuvem.up )
router.post ("/local", FotosController.store)



export default router;