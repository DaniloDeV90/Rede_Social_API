import { Request, Response } from "express";

import { ImulterUploadImages } from "../../../utils/config/MulterConfig/ImulterCloudConfig";
import { AddImagemProfileUseCase } from "./AddImagemProfileUseCase";
import CustomError from "../../../errors/ErrosLogin/CustomError";



export class AddImagemProfileController {
    constructor (private ImagesUpload:ImulterUploadImages, private AddImageProfileUseCase: AddImagemProfileUseCase) {}



    handle (req:Request, res:Response) {

        
        return this.ImagesUpload.upload ().single ("imageProfile") (req,res, async (err) => {

            try {

            
            await this.AddImageProfileUseCase.execute (req.userId as string, req.file as Express.Multer.File, err)


            res.json ("passou")
       
            }catch (error) {
                if (error instanceof CustomError) {

                    return res.status(error.codigo).json({ status: "error", message: error.mensagem });
                } else {
                    return error
                }
                }
            
        } )

    }
}


        // const cadastro = await CadastroUnique (req.userId as string)

        // if (!cadastro?.Profile?.id) return res.json({ errors: "Voce precisa de um perfil primeiro!!" })

        // return uploadd(req, res, async (err) => {

           

        //     if (err instanceof Error) {
        //         return res.json({ errors: err.message })
        //     }
        //     if (err) {
        //         return res.json({ errors: "erro" })
        //     }

        //     const id: string = cadastro.Profile?.ImgPerfil?.id as string;
        //     const Key =   req.file?.originalname.replace (/\s+/g, "") as string + Date.now ()
             
        //     const foto = req.file as Express.Multer.File
        //     const params: paramsS3  =  {
        //         Bucket: process.env.AWS_FOTO_PROFILE as string, 
        //         Key,
        //         ContentType:  foto.mimetype ,
        //         Body:  req.file?.buffer as Buffer,
        //         ACL: 'public-read'
              
            
        //     }

      
        //     if ( !await S3upload (params)) return res.status (404).json ({errors: "erro ao adicionar imagem" })
        //   console.log (req.cookies)

        //     const imgUl = await prismaClient.imgPerfil.update({
        //         where: { id },
        //         data: {
        //             imgUrl: "https://redesocbucket.s3.sa-east-1.amazonaws.com/" +  Key
        //         }
        //     }).catch(e => res.json(e))
        //         .then(() => res.json("sucesso"))
        //     return imgUl
