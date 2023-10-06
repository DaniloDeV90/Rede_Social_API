import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
import { redisClient } from "../../utils/config/RedisConfig";
import CustomErrror from "../../errors/ErrosLogin/LoginErrors";


class Login {



    async login(req: Request, res: Response) {

        try {
            const { password, email } = req.body;


            if (!password) throw new CustomErrror("Solicitação está faltando dados obrigatórios", 408)

            if (!email) throw new CustomErrror("Solicitação está faltando dados obrigatórios", 408)

            const conta = await prismaClient.cadastro.findUnique({
                where: {
                    email
                },
                select: {
                    id: true,
                    password: true
                }
            })
            if (!conta) throw new CustomErrror("Email ou senha incorretos", 400)
            if (!await bcryptjs.compare(password, conta.password)) throw new CustomErrror("Email ou senha incorretos", 400)

            const TOKEN = process.env.TOKEN as string
            const { id } = conta
            const token = jwt.sign({ id }, TOKEN, {
                expiresIn: "1d"
            })

            const contaUpdate = await prismaClient.cadastro.update({
                where: {
                    id: conta.id
                },

                select: {
                    Token: true,
                },
                data: {
                    Token: token
                }
            }).catch(() => { throw new CustomErrror("Erro ao  logar, tente novamente mais tarde", 401) })

            await redisClient.set(`user-${conta.id}`, contaUpdate.Token as string)
            

            res.cookie("ProfileCookie", contaUpdate.Token, { httpOnly: true, })

          
            res.status(200).json({
                status: "success",
                message: "Login bem sucedido!"
            })

        } catch (error) {


            if (error instanceof CustomErrror) {
                res.status(error.codigo).json({ status: "error", message: error.mensagem })
            } else {
                res.status(500).json({ status: "error", message: "erro interno" })
            }


        }
    }
}
export default new Login();