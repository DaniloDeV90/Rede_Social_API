export interface IfriendRquestRepository {
    FazerPedidoDeAmizade (idSender:string, idReciever:string): Promise <void>
    PedidosAmizade(idUser: string): Promise <any>
}