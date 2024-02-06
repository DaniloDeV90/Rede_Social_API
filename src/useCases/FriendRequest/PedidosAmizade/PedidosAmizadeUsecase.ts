import { IfriendRquestRepository } from "../../../respositories/IfriendRquestRepository";

export class PedidosAmizadeUsecase {
    constructor(private pedidosAmizade: IfriendRquestRepository) { }


    async execute(idRequestProfile: string) {

        try {


            const result = await this.pedidosAmizade.PedidosAmizade(idRequestProfile)

            return result

        } catch (e) {
            console.log(e)
        }

    }
}