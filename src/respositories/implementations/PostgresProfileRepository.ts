import { prismaClient } from "../../databse";
import { Profile } from "../../entities/Profile";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import { IprofileRepository, findProfile} from "../IProfileRepository";

export class PostgresProfileRepository implements IprofileRepository {
    async createProfile(idCadastro: string, data: Profile): Promise<Profile> {

        try {


            const user = await prismaClient.profile.create({

                data: {
                    sexo: data.sexo,
                    username: data.username,
                    cadastro_Id: idCadastro,
                    ImgPerfil: {
                        create: {
                            imgUrl: "https://res.cloudinary.com/drkpd5zkl/image/upload/f_auto,q_auto/v1/imagem_de_perfil/sem_foto"
                        }
                    }

                },



            })

            return user

        } catch (e) {
            throw new CustomErrror("Erro ao criar Perfil tente novamente mais tarde", 408)
        }
    }

    async deleteProfile(idCadastro: string): Promise<void> {

        try {


            await prismaClient.profile.delete({
                where: {
                    cadastro_Id: idCadastro
                }
            })

        } catch (e) {
            throw new CustomErrror("Erro ao deletar Perfil tente novamente mais tarde", 408)
        }
    }

    async findProfile(idCadastro: string): Promise<findProfile> {

        try {
            const profile = await prismaClient.profile.findUnique({
                where: {
                    cadastro_Id: idCadastro
                },
                select: {
                    sexo: true,
                    username: true,
                    ImgPerfil: {
                        select: {
                            imgUrl: true
                        }
                    }
                }
            }) as findProfile



            return profile





        } catch (e) {
            throw new CustomErrror("Erro ao deletar Perfil tente novamente mais tarde", 408)
        }


    }
}