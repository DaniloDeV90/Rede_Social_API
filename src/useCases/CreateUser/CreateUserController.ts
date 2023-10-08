import { Request, Response } from "express";
import CustomError from "../../errors/ErrosLogin/CustomError";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { IvalidationUser } from "../../services/IvalidationUser";


export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private Uservalidation: IvalidationUser
    ) { }

    async handle(req: Request, res: Response) {
        try {
            this.Uservalidation.UserIsValidate({ ...req.body })
            await this.createUserUseCase.execute({ ...req.body });
            
            res.status(200).json({ status: "success", message: "conta criada" })
        } catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }
    }
}
