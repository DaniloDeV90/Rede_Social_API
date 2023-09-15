import { Request, Response } from "express"
import { prismaClient } from "../../databse";
import FotoConfig from "../Fotos/FotoConfig";
import CadastroUnique from "../../utils/CadastroUnique";
const upload = FotoConfig.single("foto")
class ImgProfile {

    async Create(req: Request, res: Response) {
        const id = req.userId;
   
        const cadastro = await CadastroUnique (req.userId as string)

        if (!cadastro?.Profile?.id) return res.json({ errors: "Voce precisa de um perfil primeiro!!" })

        return upload(req, res, async (err) => {

            const urlLocal = "http://localhost:8080";
            const urlVercel = "https://api-rede-soc.vercel.app";

            if (err instanceof Error) {
                return res.json({ errors: err.message })
            }
            if (err) {
                return res.json({ errors: "erro" })
            }


            const id: string = cadastro.Profile?.ImgPerfil?.id as string;


            const imgUl = await prismaClient.imgPerfil.update({
                where: { id },
                data: {
                    imgUrl: urlLocal + "/cadastro/imagem/" + req.file?.filename
                }
            }).catch(e => res.json(e))
                .then(() => res.json("sucesso"))
            return imgUl



        })



    }


}
export default new ImgProfile();