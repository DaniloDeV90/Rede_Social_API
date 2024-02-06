import { Router } from "express";
import { authenticated } from "../middlewares";
import { pedidoDeAmizadeController } from "../useCases/FriendRequest/PedidoDeAmizade";
import { pedidosAmizadeController } from "../useCases/FriendRequest/PedidosAmizade";





const router = Router();




router.post("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => pedidoDeAmizadeController.handle(request, response))

router.get("/", (request, response, next) => authenticated.isAuthenticated(request, response, next), (request, response) => pedidosAmizadeController.handle(request, response))
export default router;