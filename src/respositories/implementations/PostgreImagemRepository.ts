import { prismaClient } from "../../databse";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import { IaddImagemProfileDTO } from "../../useCases/Profile/AddImageProfile/AddImagemProfileDTO";
import { IImageProfileRepository } from "../IImageProfileRepository";

export class PostgresImageProfileRepository implements IImageProfileRepository {
    async AddImagemProfile(data: IaddImagemProfileDTO): Promise<void> {


        try {


            await prismaClient.profile.update({
                where: {
                    cadastro_Id: data.userId
                },
                data: {
                    ImgPerfil: {
                        update: {
                            imgUrl: "https://redesocbucket.s3.sa-east-1.amazonaws.com/" + data.urlImagem
                        }
                    }
                }
            })

        }

        catch (error) {

            if (error instanceof Error)
                throw new Error(error.message)
        }
    }

}