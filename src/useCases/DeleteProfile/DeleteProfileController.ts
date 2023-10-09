import { Request, Response } from "express";
import { IprofileRepository } from "../../respositories/IProfileRepository";
import { DeleteProfileUseCase } from "./DeleteProfileUseCase";
import CustomError from "../../errors/ErrosLogin/CustomError";

export class DeleteProfileController {

    constructor(private deleteProfileUseCase: DeleteProfileUseCase) { }

    async handle(req: Request, res: Response) {

        try {

            this.deleteProfileUseCase.execute(req.userId as string)

            res.json({ status: "success", message: "Perfil deletado com sucesso" })


        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }

    }
}