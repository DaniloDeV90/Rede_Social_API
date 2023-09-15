import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/CadastroUnique"



type Contains = {
    data: {
        ProfileId: string,
        descricao: string | null
        imgPost: {
            create: {
                imgUrl: string
            }
        }
    }
}

type noContains = {
    data: {
        ProfileId: string,
        descricao: string | null,


    }
}

type ContainOrNoContains = Contains | noContains;

class CreatePostController {
    async CreatePost(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        const createPost = async (obj: ContainOrNoContains): Promise<void> => {
            await prismaClient.post.create(obj).then((() => res.json("sucesso")))
                .catch((e) => res.json(e))
        }

        const { imgUrl, descricao } = req.body;



        if (!(imgUrl || descricao)) { return res.json("erro") }


        console.log(imgUrl, descricao, req.userId)

        const cadastro = await CadastroUnique (req.userId as string)

        const ProfileId = cadastro?.Profile?.id as string;

        if (imgUrl) {
            const Contains: Contains = {
                data: {
                    descricao,
                    ProfileId,
                    imgPost: {
                        
                        create: {
                            imgUrl
                        }
                    }
                }
            }
            return await createPost(Contains)
        }

        const NoContains: noContains = {
            data: {
                descricao,
                ProfileId
            }
        }

        return await createPost(NoContains)


    }
}

export default CreatePostController