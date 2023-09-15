import {Request, Response}  from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/CadastroUnique"

class  ComentariosController {
    async criarComentario (req:Request, res:Response) {

    
const perfil = await CadastroUnique (req.userId as string)

const ProfileId:string  = perfil?.Profile?.id as string;

const NameProfile:string = perfil?.Profile?.username as string

console.log (ProfileId, NameProfile)

       await prismaClient.comentarios.create ({
        data: {
            comentario: "vdd mano tu sempre foi um cara cabeçakkkkkkkkkk",
            ProfileId,
            NameProfile,
            idPost: perfil?.Profile?.post[0].id as string,
            imgPerfilUrl: perfil?.Profile?.ImgPerfil?.imgUrl
        }
       })

       res.json ("algo aconteceu")
    }
}

export default ComentariosController