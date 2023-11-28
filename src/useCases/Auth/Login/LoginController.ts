import { Request, Response } from "express";
import { IvalidationLogin } from "../../../services/validations/LoginValidation/IvalidationLogin";
import { LoginUseCase } from "./LoginUseCase";
import CustomError from "../../../errors/ErrosLogin/CustomError";

export class LoginController {
    constructor(
        private LoginUseCase: LoginUseCase,
        private ValidationLogin: IvalidationLogin

    ) { }

    async handle(req: Request, res: Response) {
        try {

            this.ValidationLogin.LoginIsValid({ ...req.body })
            const token = await this.LoginUseCase.execute({ ...req.body })
            res.cookie(`userProfile`, token, { httpOnly: true })
            res.status(200).json({ status: "success" })



        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }
    }
}