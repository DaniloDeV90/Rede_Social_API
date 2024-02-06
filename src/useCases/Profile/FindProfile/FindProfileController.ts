import { Request, Response } from "express";
import { FindProfileUseCase } from "./FindProfileUseCase";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";

export class FindProfileController {
    constructor(private findProfileUseCase: FindProfileUseCase) { }


    async handle(req: Request, res: Response) {

        try {

     
           const result =  await this.findProfileUseCase.execute ({id_cadastro: req.userId as string})

            return res.json (result)
        } catch (error) {

            if (error instanceof CustomErrror) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            } else {
                return error
            }
        }

    }
}