import { Request, Response } from "express"
import { prismaClient } from "../../databse";
import FotoConfig from "../Fotos/FotoConfig";
const upload = FotoConfig.single("foto")
class ImgProfile {

    async Create(req: Request, res: Response) {
        const id = req.userId;
        const cadastro = await prismaClient.cadastro.findUnique({
            where: {
                id

            },
            include: {
                Profile: {
                    select: {
                        id: true
                    }
                }
            },

        })

        if (!cadastro?.Profile?.id) return res.json({ errors: "Voce precisa de um perfil primeiro!!" })

        return upload(req, res, async (err) => {

            const urlLocal = "http://localhost:8080";
            const urlVercel = "https://api-rede-soc.vercel.app";

            if (err instanceof Error) {
                return res.json({ errors: err.message })
            }
            if (err) {
                return res.json("erro")
            }

            console.log(cadastro)
            const imgUrl = await prismaClient.imgPerfil.create({
                data: {
                    imgUrl: urlLocal + req.file?.filename,
                    Profile: {
                        connect: {
                            id: cadastro?.Profile?.id
                        }
                    }
                }
            })

            console.log(req.file)
            res.json({ ap: imgUrl })
        })



    }


}
export default new ImgProfile();