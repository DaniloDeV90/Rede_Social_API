import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

import { redisClient } from "../../utils/config/RedisConfig";


class Login {


    async login(req: Request, res: Response) {

        const { password, email } = req.body;

        const conta = await prismaClient.cadastro.findUnique({
            where: {
                email
            }
        })
        if (!conta) return res.status(404).json("Email inválido")
        if (!await bcryptjs.compare(password, conta.password)) return res.status(404).json("Senha inválida")

        const TOKEN = process.env.TOKEN as string
        const { id } = conta
        const token = jwt.sign({ id }, TOKEN, {
            expiresIn: "1d"
        })

        const contaUpdate = await prismaClient.cadastro.update({
            where: {
                id: conta.id
            },
            data: {
                Token: token
            }
        }).catch(() => res.json("algo deu errado tente novamente mais tarde"))

        await redisClient.set(`user-${id}`, JSON.stringify(contaUpdate))





        res.status(200).json({ token })





    }
}
export default new Login();