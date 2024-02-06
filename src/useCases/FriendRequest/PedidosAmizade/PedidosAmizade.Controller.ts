import { Request, Response } from "express";
import { PedidosAmizadeUsecase } from "./PedidosAmizadeUsecase";

export class PedidosAmizadeController {
    constructor(private pedidosAmizade: PedidosAmizadeUsecase) { }


    async handle(request: Request, res: Response) {

        try {

console.log ("Oi")
          const result =  await this.pedidosAmizade.execute(request.body.idRequestProfile as string)

console.log (result)
            res.send (result)
        } catch (e) {
            console.log(e)
        }

    }
}