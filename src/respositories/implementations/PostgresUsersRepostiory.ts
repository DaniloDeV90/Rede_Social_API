import { prismaClient } from "../../databse";
import { Ilogin } from "../../entities/Login";

import { User } from "../../entities/User";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import Bcrypt from "../../utils/functions/Bcrypt";
import BcryptCompare from "../../utils/functions/BcryptCompare";

import { Iupdate, IusersRespository } from "../IUserRespository";

export class PostgresUsersRepository implements IusersRespository {
    async SaveUser(User: User): Promise<User> {

        const password = await Bcrypt(User.password)
        const user = await prismaClient.cadastro.create({
            data: {
                data_nasc: new Date(User.data_nasc),
                password,
                nome: User.nome,
                email: User.email
            }

        }) as User

        return user
    }

    async findByEmail(email: string): Promise<User> {


        const emaill = await prismaClient.cadastro.findUnique({
            where: {
                email
            },
            include: {
                profile: {
                    select: {
                        id: true
                    }
                }
            }
        }) as User


        await prismaClient.$disconnect()
        return emaill

    }

    async findByUniqueUser(id: string): Promise<User> {


        const login = await prismaClient.cadastro.findUnique({

            where: {
                id: id
            }
        }) as User

        await prismaClient.$disconnect()
        return login
    }

    async UpdateUser(IdUser: string, user: Iupdate): Promise<User> {


        const UserUpdated = await prismaClient.cadastro.update({
            where: {

                id: IdUser
            },
            data: { ...user }

        }) as User

        await prismaClient.$disconnect()
        return UserUpdated
    }

    async deleteUser(id: string): Promise<void> {

        try {


            await prismaClient.cadastro.delete({
                where: {
                    id
                }
            })

        } catch (error) {
            throw new CustomErrror("Erro ao tentar deletar usuario, tente novamente mais tarde", 408)
        }
    }
}