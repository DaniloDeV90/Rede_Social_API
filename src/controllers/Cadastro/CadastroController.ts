import e, { Request, Response } from "express"
import { prismaClient } from "../../databse";
import IsEmpty from "../../errors/IsEmptyCadastro";
import bcryptjs from "bcryptjs"

class Cadastrar {

    async create(req: Request, res: Response) {

        try {


            const cadastro = {
                nome: req.body.nome as string,
                email: req.body.email as string,
                data_nasc: req.body.data_nasc as string,
                password: req.body.password as string,
                passwordConfirm: req.body.passwordConfirm as string
            }

            const erros: string[] = IsEmpty(cadastro);

            if (erros.length === 0) {
            const senhaCrypt =  await  bcryptjs.hash (cadastro.password, 10)



                const cadastrado = await prismaClient.cadastro.create({
                    data: {
                        nome: cadastro.nome,
                        email: cadastro.email,
                        data_nasc: new Date(cadastro.data_nasc),
                        password: senhaCrypt,
                    }
                }).catch(() => {

                    throw new Error("Este email já existe ")
                })
                return res.json({ cadastrado })

            } else return res.json({ erros })

        } catch (erro) {

            if (erro instanceof Error) {
                return res.json({ erros: erro.message })
            }

            res.json({ erros: erro })
        }

    }

    async delete (req:Request, res:Response) {
       await prismaClient.cadastro.delete ({
            where: {
                id: "7ba0bd09-d2d8-4347-a487-04ea925571ef"
            }
        }).then (() => { return res.json ("deletado")} )
        .catch (() =>  { return res.json ("erro")} )
    }
}

export default new Cadastrar();