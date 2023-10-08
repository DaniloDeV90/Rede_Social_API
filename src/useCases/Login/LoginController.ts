import { Request, Response } from "express";
import { IvalidationLogin } from "../../services/IvalidationLogin";
import { LoginUseCase } from "./LoginUseCase";
import CustomError from "../../errors/ErrosLogin/CustomError";

export class LoginController {
    constructor(
        private LoginUseCase: LoginUseCase,
        private ValidationLogin: IvalidationLogin

    ) { }

    async handle(req: Request, res: Response) {
        try {

            this.ValidationLogin.LoginIsValid({ ...req.body })
            const login = await this.LoginUseCase.handle({ ...req.body })

            res.cookie("ProfileCookie", login.Token, { httpOnly: true, })
            res.status(200).json({ status: login })



        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }
    }
}