import { IImageProfileRepository } from "../../../respositories/IImageProfileRepository";
import { IS3Bucket } from "../../../respositories/IS3bucket";
;

export class DeleteImageProfileUseCase {
    constructor(private ImageRepository: IImageProfileRepository, private S3Bucket: IS3Bucket) { }

    async execute(idUser: string) {

        const img = await this.ImageRepository.findProfileImage(idUser)
        await this.ImageRepository.DeleteImagePorfile({ idUser })


        await this.S3Bucket.S3delete({ Bucket: process.env.AWS_FOTO_PROFILE as string, Key: img.ImgPerfil?.nameImg as string })
       
    }
}