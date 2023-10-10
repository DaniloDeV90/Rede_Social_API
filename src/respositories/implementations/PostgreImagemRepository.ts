import { prismaClient } from "../../databse";
import { IImageProfileRepository } from "../IImageProfileRepository";

export class PostgresImageProfileRepository implements IImageProfileRepository {
    async AddImagemProfile(idUser: string, imgUrl: string): Promise<void> {

        await prismaClient.profile.update({
            where: {
                cadastro_Id: idUser
            },
            data: {
                ImgPerfil: {
                    create: {
                        imgUrl
                    }
                }
            }
        })

    }

}