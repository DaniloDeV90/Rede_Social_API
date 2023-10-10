import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import CustomError from "../../../errors/ErrosLogin/CustomError";

export class DeleteUserController {

    constructor(private DeleteUserUseCase: DeleteUserUseCase) { }

    async handle(req: Request, res: Response) {

        try {


            await this.DeleteUserUseCase.execute({ IdUser: req.userId as string })


            res.status(201).json({ status: "success", message: "User apagado com sucesso!" })

        } catch (error) {

            if (error instanceof CustomError) {
                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }
        }

    }

}