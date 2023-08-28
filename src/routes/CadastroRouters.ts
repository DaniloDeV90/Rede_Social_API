import { Router } from "express";
import CadastroController from "../controllers/Cadastro/CadastroController";
import FotosController from "../controllers/Fotos/FotosController";

import { join } from "path";
import FotoNuvem from "../controllers/Fotos/FotoNuvemController";


const router = Router ();


router.post ("/", CadastroController.Add )

router.post ("/foto", FotosController.store)

router.post ("/nuvem",FotoNuvem.up )

router.get('/imagem/:nomeArquivo', (req, res) => {
    const nomeArquivo = req.params.nomeArquivo;
    const caminho = join (__dirname, "..", "..", "image", nomeArquivo)  
    res.sendFile(caminho);
});

export default router;