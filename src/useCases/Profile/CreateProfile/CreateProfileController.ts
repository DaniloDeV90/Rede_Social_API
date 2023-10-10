import { Request, Response } from "express";
import CustomError from "../../../errors/ErrosLogin/CustomError";
import { CreateProfileUseCase } from "./CreateProfileUseCase";
import { IvalidationCreateProfile } from "../../../services/validations/ProfileValidation/IvalidationsCreateProfile";

export class CreateProfileController {

    constructor(private createProfileUseCase: CreateProfileUseCase, private CreateProfileValidation: IvalidationCreateProfile) { }
    async handle(req: Request, res: Response) {
        try {

            console.log(req.userId)


            this.CreateProfileValidation.ProfileIsValid({ ...req.body })

            await this.createProfileUseCase.execute(req.userId as string, { ...req.body })

            res.status(201).json({ status: "success", message: "Perfil criado!" })


        } catch (error) {
            if (error instanceof CustomError) {

                return res.status(error.codigo).json({ status: "error", message: error.mensagem });
            }

        }

    }
}