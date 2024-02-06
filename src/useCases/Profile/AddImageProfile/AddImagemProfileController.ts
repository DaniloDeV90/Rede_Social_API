import { Request, Response } from "express";

import { ImulterUploadImages } from "../../../utils/config/MulterConfig/ImulterCloudConfig";
import { AddImagemProfileUseCase } from "./AddImagemProfileUseCase";
import CustomError from "../../../errors/ErrosLogin/CustomError";


import { multerCloudinary } from "../../../utils/config/MulterConfig";

export class AddImagemProfileController {
    constructor(private ImagesUpload: ImulterUploadImages, private AddImageProfileUseCase: AddImagemProfileUseCase) { }



    handle(req: Request, res: Response) {


        return  multerCloudinary.single("imageProfile")(req, res, async (err) => {

            try {
                const file = req.file as Express.Multer.File
                console.log(file)
                await this.AddImageProfileUseCase.execute(req.userId as string, file as Express.Multer.File, err)


                return res.status(201).json({ status: "success", message: "Imagem de perfil alterada!" })

            } catch (error) {
                if (error instanceof CustomError) {

                    return res.status(error.codigo).json({ status: "error", message: error.mensagem });
                } else {
                    return error
                }
            }

        })

    }
}

