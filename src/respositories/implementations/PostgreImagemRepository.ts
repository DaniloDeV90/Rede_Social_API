import { prismaClient } from "../../databse";
import CustomErrror from "../../errors/ErrosLogin/CustomError";

import { IimageProfileDTO } from "../../useCases/Profile/AddImageProfile/AddImagemProfileDTO";
import { IImageDeleteDTO } from "../../useCases/Profile/DeleteImageProfile/DeleteImageProfileDTO";
import { IImageProfileRepository, IimagePorfile } from "../IImageProfileRepository";

export class PostgresImageProfileRepository implements IImageProfileRepository {
    async AddImageProfile(data: IimageProfileDTO): Promise<void> {


        try {


            await prismaClient.profile.update({
                where: {
                    cadastro_Id: data.userId
                },
                data: {
                    
                    ImgPerfil: {
                        update: {
                            imgUrl:   data.urlImg,
                            nameImg: data.nomeImg

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

    async DeleteImagePorfile(data: IImageDeleteDTO): Promise<void> {

        try {

            await prismaClient.profile.update({
                where: {
                    cadastro_Id: data.idUser
                },
                data: {
                    ImgPerfil: {
                        update: {
                            imgUrl: "https://redesocbucket.s3.sa-east-1.amazonaws.com/semfoto.png"
                        }
                    },
                }
            })

        } catch (erro) {
            throw new CustomErrror("Erro ao deletar imagem do perfil", 408)
        }
    }



    async findProfileImage(idUser: string): Promise<IimagePorfile> {
        try {


            const profileImage = await prismaClient.profile.findUnique({
                where: {
                    cadastro_Id: idUser
                },
                select: {
                    ImgPerfil: true
                }
            }).catch (err => console.log  (err)) as IimagePorfile

            return profileImage

        } catch (error) {

            throw new CustomErrror("Erro ao mostrar imagem do perfil", 408)
        }
    }
}