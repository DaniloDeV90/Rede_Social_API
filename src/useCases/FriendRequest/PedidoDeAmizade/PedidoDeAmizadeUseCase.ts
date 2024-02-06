import { IfriendRquestRepository } from "../../../respositories/IfriendRquestRepository";
import { PedidoDeAmizadeDTO } from "./PedidoDeAmizadeDTO";

export class PedidoDeAmizadeUseCase {
    constructor(private friendRequestRepository: IfriendRquestRepository) {

    }


    async execute(data: PedidoDeAmizadeDTO) {


      await  this.friendRequestRepository.FazerPedidoDeAmizade(data.idSendProfile, data.idRecieverProfile)



    }
}