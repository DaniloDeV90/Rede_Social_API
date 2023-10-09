import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/functions/CadastroFunction"

class ComentariosController {
    async criarComentario(req: Request, res: Response) {

        // try {


    //         const { idPost } = req.body;

    //         const perfil = await CadastroUnique(req.userId as string)

    //         if (!perfil) return res.json({ errors: "você precisa de um perfil primeiro para fazer um comentário!" })


    //         const ProfileId: string = perfil?.Profile?.id as string;

    //         const NameProfile: string = perfil?.Profile?.username as string

    //         console.log(ProfileId, NameProfile)

    //         await prismaClient.comentarios.create({
    //             data: {
    //                 comentario: "Roubaram o super gremio",
    //                 ProfileId,
    //                 NameProfile,
    //                 idPost,
    //                 imgPerfilUrl: perfil?.Profile?.ImgPerfil?.imgUrl
    //             }
    //         }).catch(() => res.status(400).json({ errors: "erro ao criar comentário" }))


    //         res.status(200).json(true)
    //     } catch (e) {
    //         res.status(400).json("Erro ao enviar comentário.")
    //     }
    // }


    // async GetComentario(req: Request, res: Response) {

    //     try {

        
    //     const { idPost } = req.params;
    //     const comentarios = await prismaClient.post.findUnique({
    //         where: {
    //             id: idPost,
            
    //         },

    //         select: {
            
    //             comentarios: true
    //         }
    //     })


    //     res.status(200).json(comentarios)
    // } catch (e) {
    //     res.status (404).json ({errors: "erro interno"})
    // }
    // }

}}

export default ComentariosController