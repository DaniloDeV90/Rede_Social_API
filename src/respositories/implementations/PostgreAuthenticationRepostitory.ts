
import { Token } from "../../entities/Token";
import { IAuthenticatedRepository } from "../IAuthenticatedRepository";
import { prismaClient } from "../../databse";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import e from "express";


export class PostgreAuthenticationRepostitory implements IAuthenticatedRepository {

    async CreateToken(idUser: string): Promise<Token> {

        try {


            const user = await prismaClient.token.create({
                data: {
                    cadastroId: idUser
                },

            }) as Token
            return user
        } catch (e) {


            throw new CustomErrror("Erro ao criar token, tente novamente mais tarde", 409)
        }


    }


    async IsAuthenticated(idUser: string): Promise<Token> {

        const user = await prismaClient.token.findUnique({
            where: {
                cadastroId: idUser
            },
            select: {
                token: true
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

    async UpdatedToken(idUser: string, token: string): Promise<Token> {

        try {


            const Token = await prismaClient.token.update({
                where: {
                    cadastroId: idUser
                },
                data: {
                    token
                }
            })

            return Token
        


          }  catch (error) {
            if (error instanceof CustomErrror) {
                throw new CustomErrror("Erro ao carrega o token, tente novamente mais tarde", 408)
            } else  {
                throw new Error ("Erro interno")
            }
        }
    }
}