import { prismaClient } from "../../databse";
import { IfriendRquestRepository } from "../IfriendRquestRepository";

export class FriendRequestRepository implements IfriendRquestRepository {
    constructor() { }


    async FazerPedidoDeAmizade(idSender: string, idReciever: string) {

        try {


            await prismaClient.friendRequest.create({
                data: {
                    status: "ESPERA",
                    profileReceiveId: idReciever,
                    profileSendId: idSender

                }
            })


        }

        catch (err) {
            console.log(err)
        }
    }



    async PedidosAmizade(idUser: string) {
        try {

           const pedidos =  await prismaClient.friendRequest.findMany({

                where: {
                    profileReceiveId: idUser
                },
            select: {
                status: true,
            
                profileSend: true
            }
            })


            return pedidos
        }

        catch (err) {
            console.log(err)
        }
    }
}