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
        })

        return user
    }

    async findByEmail(email: string): Promise<User> {


        const emaill = await prismaClient.cadastro.findUnique({
            where: {
                email
            }
        }) as User


        await prismaClient.$disconnect()
        return emaill

    }

    async findByUniqueUser(data: string): Promise<User> {


        const login = await prismaClient.cadastro.findUnique({

            where: {
                id: data
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

        })

        await prismaClient.$disconnect()
        return UserUpdated
    }

}