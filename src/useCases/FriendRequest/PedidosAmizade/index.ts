import { FriendRequestRepository } from "../../../respositories/implementations/FriendRequestRepository";

import { PedidosAmizadeController } from "./PedidosAmizade.Controller";
import { PedidosAmizadeUsecase } from "./PedidosAmizadeUsecase";

const friendRequest = new FriendRequestRepository ()

const pedidosAmizadeUseCase = new PedidosAmizadeUsecase (friendRequest)
const pedidosAmizadeController = new PedidosAmizadeController (pedidosAmizadeUseCase)


export {pedidosAmizadeController}