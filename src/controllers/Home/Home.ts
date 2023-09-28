import { Request, Response } from "express"
import { prismaClient } from "../../databse";



class Home {


    async home(req: Request, res: Response) {

        
        const allPosts = await prismaClient.post.findMany({
        
        
            select: {
        
                id: true,
                imgPost: {
                    select: {
                        imgUrl: true
                    }
                },
                descricao: true,
                created: true,
                profile: {
                    select: {
                        username: true,
                        ImgPerfil: {
                            select: {
                                imgUrl: true
                            }
                        }
                    }

                }
            }
        })
        res.json(allPosts)




    }
}
export default new Home();