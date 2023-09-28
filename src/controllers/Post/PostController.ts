import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/functions/CadastroFunction"
import upload from "../../utils/config/MulterCloudConfig"
import {S3delete, S3upload} from "../../utils/services/S3Service"
import  * as AllTypes from "../../utils/types/Params"

const up = upload.single("foto")

type ContainOrNoContains = AllTypes.Contains | AllTypes.noContains;

class CreatePostController {
    async CreatePost(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {


        return up(req, res, async (err) => {

            if (err instanceof Error) {
                return res.json({ errors: err.message })
            }

            const { descricao } = req.body;
            const foto = (req.file)
            console.log (descricao)
            console.log (foto)
            if (!(foto || descricao)) { return res.json("erro") }

            const cadastro = await CadastroUnique(req.userId as string)

            if (!cadastro?.Profile) return res.json({ errors: "Você precisa de um perfil primeiro!" })

            const ProfileId = cadastro?.Profile?.id as string;

            const createPost = async (obj: ContainOrNoContains): Promise<void> => {
                await prismaClient.post.create(obj).then((() => res.json("sucesso")))
                    .catch((e) => res.json(e))
            }

            if (foto) {

                const Key = req.file?.originalname.replace(/\s+/g, "") as string + Date.now()

                const params: AllTypes.paramsS3 = {
                    Bucket: process.env.AWS_NAME_BUCKET as string,
                    Key,
                    ContentType: foto.mimetype,
                    Body: req.file?.buffer as Buffer,
                    ACL: 'public-read'


                }


                if (!await S3upload(params)) return res.status(404).json({ errors: "erro ao adicionar imagem" })




                const Contains: AllTypes.Contains = {
                    data: {
                        descricao,
                        ProfileId,
                        imgPost: {

                            create: {
                                imgUrl: "https://imagempostbucket.s3.sa-east-1.amazonaws.com/" + Key
                            }
                        }
                    }
                }
                return await createPost(Contains)
            }

            const NoContains: AllTypes.noContains = {
                data: {
                    descricao,
                    ProfileId
                }
            }

            return await createPost(NoContains)


        }
        )
    }


    async delete(req: Request, res: Response) {

        const {name_Bucket} = req.body;

       
        const user =  await CadastroUnique (req.userId as string)
        

        console.log (user?.Profile?.post)

        

        
        const result = await  S3delete ()

        res.json ({result})
        
    }
}

export default CreatePostController