import CustomError from "../../../errors/ErrosLogin/CustomError";
import { IImageProfileRepository } from "../../../respositories/IImageProfileRepository";
import { IS3Bucket } from "../../../respositories/IS3bucket";
import { IaddImagemProfileDTO } from "./AddImagemProfileDTO";


export class AddImagemProfileUseCase {
    constructor(private S3bucketRepository: IS3Bucket,
        private ImageProfileRepository: IImageProfileRepository) { }

    async execute(idUser: string, file: Express.Multer.File, error: CustomError) {
        if (error instanceof CustomError) throw new CustomError(error.mensagem, error.codigo)




        const KeyImage = file.originalname.replace(/\s+/g, "") as string + Date.now()

        await this.S3bucketRepository.S3upload({ ACL: "public-read", Body: file.buffer as Buffer, Bucket: process.env.AWS_FOTO_PROFILE as string, Key: KeyImage, ContentType: file.mimetype })



        const DataAddImage: IaddImagemProfileDTO = {
            urlImagem: KeyImage,
            userId:  idUser
        }


        await this.ImageProfileRepository.AddImagemProfile(DataAddImage)
    }
}

