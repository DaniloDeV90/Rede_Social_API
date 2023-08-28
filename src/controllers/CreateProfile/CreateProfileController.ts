import { Request, Response } from "express"
import { prismaClient } from "../../databse";
import FotoConfig from "../Fotos/FotoConfig";

class CreateProfile {

    async Create(req: Request, res: Response) {
        const id = req.userId


        const { username, sexo } = req.body;



        console.log(username, sexo)

        const criado = await prismaClient.profile.create({
            data: {
                sexo,
                username,
                Cadastro: {
                    connect: {
                        id: id
                    }
                }

            }
        })
        console.log(criado)
        res.json("asd")
    }
}


export default new CreateProfile();