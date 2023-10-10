import { prismaClient } from "../../databse";
import { Profile } from "../../entities/Profile";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import { IprofileRepository } from "../IProfileRepository";

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
                            imgUrl: "https://redesocbucket.s3.sa-east-1.amazonaws.com/semfoto.png"
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
}