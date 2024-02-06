import { Request, Response } from "express";
import CustomError from "../../../errors/ErrosLogin/CustomError";
import { LogoutUseCase } from "./LogoutCaseUse";

export class LogoutController {
    constructor(private LogoutUseCase: LogoutUseCase) { }


    async handle(req: Request, res: Response) {

        try {


           await this.LogoutUseCase.execute(req.userId as string)
            res.status(201).json({ success: "success", message: "chegou" })

        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }
    }
}