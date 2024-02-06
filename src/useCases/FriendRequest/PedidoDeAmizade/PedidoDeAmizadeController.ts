import { Request, Response } from "express";
import { PedidoDeAmizadeUseCase } from "./PedidoDeAmizadeUseCase";

export class PedidoDeAmizadeController {

    constructor(private pedidoDeAmizadeUseCase: PedidoDeAmizadeUseCase) {

    }


    async handle(req: Request, res: Response) {


        try {

            const idRecieverProfile = req.body.idReciever
            const idSendProfile = req.body.idSendProfile

            await this.pedidoDeAmizadeUseCase.execute({ idRecieverProfile, idSendProfile })



            res.json("sucesso")

        } catch (err) {

            console.log(err)
        }
    }
}