
import { Token } from "../../entities/Token";
import { IAuthenticatedRepository } from "../IAuthenticatedRepository";
import { prismaClient } from "../../databse";
import CustomErrror from "../../errors/ErrosLogin/CustomError";


export class PostgreAuthenticationRepostitory implements IAuthenticatedRepository {

    async CreateToken(idUser: string, token: string): Promise<Token> {

        try {


            const user = await prismaClient.token.create({
                data: {
                    token,
                    cadastroId: idUser
                }

            })
            return user
        } catch (e) {
            throw new CustomErrror("Ocorreu um erro ao logar, por favor, tente novamente mais tarde", 408)

        }


    }
    async IsAuthenticated(idUser: string): Promise<Token> {

        const user = await prismaClient.token.findUnique({
            where: {
                id: idUser
            }
        }) as Token


        return user
    }

    async delete(UserId: string): Promise<void> {
        await prismaClient.token.delete({
            where: {
                cadastroId: UserId
            }
        })

    }

}