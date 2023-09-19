import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/CadastroUnique"

class ComentariosController {
    async criarComentario(req: Request, res: Response) {

        try {


            const { idPost } = req.body;

            const perfil = await CadastroUnique(req.userId as string)

            if (!perfil) return res.json({ errors: "você precisa de um perfil primeiro para fazer um comentário!" })


            const ProfileId: string = perfil?.Profile?.id as string;

            const NameProfile: string = perfil?.Profile?.username as string

            console.log(ProfileId, NameProfile)

            await prismaClient.comentarios.create({
                data: {
                    comentario: "Flamengo",
                    ProfileId,
                    NameProfile,
                    idPost,
                    imgPerfilUrl: perfil?.Profile?.ImgPerfil?.imgUrl
                }
            }).catch(() => res.status(400).json({ errors: "erro ao criar comentário" }))


            res.status(200).json(true)
        } catch (e) {
            res.status(400).json("Erro ao enviar comentário.")
        }
    }



}

export default ComentariosController