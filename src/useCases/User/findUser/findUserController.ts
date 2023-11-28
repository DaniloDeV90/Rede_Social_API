import { Request, Response } from "express";
import { FindUserUseCase } from "./findUserUseCase";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";

export class FindUserController {
    constructor(private FindUserUseCase: FindUserUseCase) { }

    async handle(req: Request, res: Response) {

        try {


            const { email }: { email: string } = req.body;

            if (!email.length) throw new CustomErrror("email invalido", 408)

            const request = await this.FindUserUseCase.execute({ email })

            res.json(request)


        } catch (error) {
            if (error instanceof CustomErrror) {
                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }


        }

    }
}