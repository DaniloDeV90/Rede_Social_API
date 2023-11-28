import { prismaClient } from "../../databse";
import { IcreatePostWithImageDTO } from "../../useCases/Posts/PostCreate/PostCreateDTO";
import { ICreatePost, IpostRepository } from "../IPostRepository";



export class PostgrePostRepsoitory implements IpostRepository {
    constructor() { }


    async createPostWithImage(idUser: string, postdata: IcreatePostWithImageDTO): Promise<void> {

        const post = await prismaClient.profile.update({

            where: {
                cadastro_Id: idUser
            },
            data: {
                post: {
                    create: {
                        descricao: postdata.descricao,
                        imgPost: {
                            create: {
                                imgUrl: postdata.imgUrl
                            }
                        }
                    }
                }

            },

            select: {
                post: {
                    take: 1,
                    orderBy: {

                        created: "desc"
                    }
                }
            }

        })

        console.log(post)
    }
}


