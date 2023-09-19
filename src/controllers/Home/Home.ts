import { Request, Response } from "express"
import { prismaClient } from "../../databse";



class Home {


    async home(req: Request, res: Response) {

        const allPosts = await prismaClient.post.findMany({
            select: {
                imgPost: {
                    select: {
                        imgUrl: true
                    }
                },
                descricao: true,
                created: true,
                profile: {
                    select: {
                        username: true
                    }
                },
                comentarios: {
                    select: {
                        NameProfile: true,
                        comentario: true,
                        PostagemData: true
                    }
                }
            }
        })
        res.json(allPosts)




    }
}
export default new Home();