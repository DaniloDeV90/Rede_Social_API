import { cloudinary } from "../../utils/config/Cloudinary/Cloudnary";
import { IcloudinaryRepository } from "../IcloudinaryRepository";

export class CloudinaryRepository implements IcloudinaryRepository {
    constructor() { }

    async uploadImage(file: Express.Multer.File) {


        const nomeImg =  file.originalname.replace(/\s+/g, "") + Date.now()
        const result = await cloudinary.uploader.upload(file.path, {
            folder: "imagem_de_perfil",
            resource_type: "image",
            public_id: nomeImg
        })


        console.log (result.url)
        return   ({url: result.url, nomeImg})



    }
}