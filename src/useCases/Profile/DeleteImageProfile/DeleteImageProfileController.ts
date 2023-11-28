import { Request, Response } from "express";
import { DeleteImageProfileUseCase } from "./DeleteImageProfileUseCase";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import CustomError from "../../../errors/ErrosLogin/CustomError";

export class DeleteImageProfile {

    constructor(private DeleteProfileUseCase: DeleteImageProfileUseCase) { }


    async handle(req: Request, res: Response) {


        try {



            await this.DeleteProfileUseCase.execute(req.userId as string)


            res.status (201).json ({status: "success", message: "imagem de perfil deletada com sucesso!"})
        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }
        }
    }
}