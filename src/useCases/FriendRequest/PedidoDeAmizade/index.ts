import { FriendRequestRepository } from "../../../respositories/implementations/FriendRequestRepository";
import { PedidoDeAmizadeController } from "./PedidoDeAmizadeController";
import { PedidoDeAmizadeUseCase } from "./PedidoDeAmizadeUseCase";


const friendRequestRepository = new  FriendRequestRepository ()
const pedidoDeAmizadeUseCase = new PedidoDeAmizadeUseCase (friendRequestRepository)
const pedidoDeAmizadeController = new PedidoDeAmizadeController (pedidoDeAmizadeUseCase)

export {pedidoDeAmizadeController}