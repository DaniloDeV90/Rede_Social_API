import { Request, Response } from "express"

import { CreateRegisterUseCase } from "./createRegisterUseCase"

import CustomErrror from "../../../errors/ErrosLogin/CustomError"

export class CreateRegisterController {

    async handle(req: Request, res: Response) {


        try {

            const createRegisterUseCase = new CreateRegisterUseCase()


            const User = await createRegisterUseCase.execute({ ...req.body })

            return res.status(200).json(User)


        } catch (erro) {

            if (erro instanceof CustomErrror) {
                return res.status(erro.codigo).json({ status: "error", message: erro.mensagem })
            }


        }

    }


}



