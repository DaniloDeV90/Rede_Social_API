import { Request, Response } from "express"
import { prismaClient } from "../../databse"
import CadastroUnique from "../../utils/CadastroUnique"
import upload from "../../utils/MulterCloudConfig"
import S3UploadConfig from "../../utils/S3UploadConfig"

type paramsS3 = {
    Bucket: string,
    Key: string,
    Body: Buffer,
    ACL: string,
    ContentType: string

}
const up =  upload.single ("foto")

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
        

        return up(req, res, async (err) => {

            if (err instanceof Error) {
                return res.json({ errors: err.message })
            }

            const createPost = async (obj: ContainOrNoContains): Promise<void> => {
                await prismaClient.post.create(obj).then((() => res.json("sucesso")))
                    .catch((e) => res.json(e))
            }

            const {  descricao } = req.body;



            const foto =  (req.file)
            if (!(foto || descricao)) { return res.json("erro") }


        

            const cadastro = await CadastroUnique(req.userId as string)

            if (!cadastro?.Profile) return res.json({ errors: "Você precisa de um perfil primeiro!" })

            const ProfileId = cadastro?.Profile?.id as string;

            if (foto) {

                const Key =   req.file?.originalname.replace (/\s+/g, "") as string + Date.now ()
             
                const params: paramsS3  =  {
                    Bucket: process.env.AWS_NAME_BUCKET as string, 
                    Key,
                    ContentType:  foto.mimetype,
                    Body:  req.file?.buffer as Buffer,
                    ACL: 'public-read'
                  
                
                }
    
          
                if ( !await S3UploadConfig (params)) return res.status (404).json ({errors: "erro ao adicionar imagem" })
    

                
             
                const Contains: Contains = {
                    data: {
                        descricao,
                        ProfileId,
                        imgPost: {

                            create: {
                                imgUrl:  "https://imagempostbucket.s3.sa-east-1.amazonaws.com/" +  Key
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
    )}


    async delete (req: Request, res: Response) {

    }
}



export default CreatePostController

// return uploard(req, res, async (err) => {


//     if (err instanceof Error) {
//         return res.json(err.message)
//     }


//     const params: paramsS3  =  {
//         Bucket: process.env.AWS_NAME_BUCKET as string, 
//         Key: req.file?.originalname.replace (/\s+/g, "") as string + Date.now (),
//         Body:  req.file?.buffer as Buffer,
//         ACL: 'public-read'
      
    
//     }


//     if ( !await S3UploadConfig (params)) return res.status (404).json ({errors: "erro ao adicionar imagem" })

//     res.status (200).json ("sucesso")
    


// })