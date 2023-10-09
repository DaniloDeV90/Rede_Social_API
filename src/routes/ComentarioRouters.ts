import {Router} from "express"
import ComentariosController from "../controllers/Comentarios/ComentariosController"
// import Login from "../middlewares/Login"


const router = Router ()

const comentarioController = new ComentariosController ()


// router.post ("/",Login.Add, comentarioController.criarComentario )

// router.get  ("/:idPost", comentarioController.GetComentario)

export default router