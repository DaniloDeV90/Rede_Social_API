import { prismaClient } from "../../databse";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import { IcreateRegisterUseCase } from "../../interfaces/Register/CreateRegisterUseCase";
import Bcrypt from "../../utils/functions/Bcrypt";

export class InsertResgister {
    constructor() { }

    async handle({ nome, data_nasc, email, password }: IcreateRegisterUseCase) {

        try {


            const hashPassword = await Bcrypt(password)

            const User = await prismaClient.cadastro.create({
                data: {
                    data_nasc: new Date(data_nasc),
                    email,
                    password: hashPassword,
                    nome
                }
            }).then(success => success)
                .catch(e => { throw new Error(e.code) })


            return User
        } catch (error) {

            if (error instanceof Error) {


                if (error.message == "P2002") throw new CustomErrror("Este Email já está cadastrado", 409)

                else throw new CustomErrror("Ocorreu um erro durante o cadastro", 500)

            }

        }


    }

}