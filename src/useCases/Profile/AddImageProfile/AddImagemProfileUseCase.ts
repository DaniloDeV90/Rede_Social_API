import CustomError from "../../../errors/ErrosLogin/CustomError";
import { IImageProfileRepository } from "../../../respositories/IImageProfileRepository";

import { IcloudinaryRepository } from "../../../respositories/IcloudinaryRepository";




export class AddImagemProfileUseCase {
    constructor(private cloudnaryRepository: IcloudinaryRepository,
        private ImageProfileRepository: IImageProfileRepository) { }

    async execute(idUser: string, file: Express.Multer.File, error: CustomError) {



        const url = await this.cloudnaryRepository.uploadImage(file)



        await this.ImageProfileRepository.AddImageProfile({ nomeImg: url.nomeImg, urlImg: url.url, userId: idUser })




    }
}

