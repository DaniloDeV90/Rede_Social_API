// import { Request, Response } from "express"
// import { prismaClient } from "../../databse"
// import CadastroUnique from "../../utils/functions/CadastroFunction"
// import upload from "../../utils/config/MulterConfig/MulterCloudConfig"
// import { S3delete, S3upload } from "../../services/S3Service"
// import * as AllTypes from "../../utils/types/Params"
// import { redisClient } from "../../utils/config/RedisConfig"
// import CustomErrror from "../../errors/ErrosLogin/CustomError"






// const up = upload.single("foto")

// type ContainOrNoContains = AllTypes.Contains | AllTypes.noContains;

// class CreatePostController {
//     // async CreatePost(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {

//     //     const createPost = async (obj: ContainOrNoContains): Promise<void> => {
//     //         await prismaClient.post.create(obj).then(((res) => res))
//     //             .catch((e) => res.json(e))



//     //     }

//     //     return up(req, res, async (err) => {

//     // //         if (err instanceof Error) {
//     // //             return res.json({ errors: err.message })
//     // //         }

//     // //         const { descricao } = req.body;
//     // //         const foto = (req.file)

//     // //         if (!(foto || descricao)) { return res.json("erro") }

//     // //         const cadastro = await CadastroUnique(req.userId as string)

//     // //         if (!cadastro?.Profile) return res.json({ errors: "Você precisa de um perfil primeiro!" })

//     // //         const ProfileId = cadastro?.Profile?.id as string;


//     // //         if (foto) {

//     // //             const Key = req.file?.originalname.replace(/\s+/g, "") as string + Date.now()

//     // //             const params: AllTypes.paramsS3 = {
//     // //                 Bucket: process.env.AWS_NAME_BUCKET as string,
//     // //                 Key,
//     // //                 ContentType: foto.mimetype,
//     // //                 Body: req.file?.buffer as Buffer,
//     // //                 ACL: 'public-read'


//     // //             }


//     // //             if (!await S3upload(params)) return res.status(404).json({ errors: "erro ao adicionar imagem" })

//     // //             const Contains: AllTypes.Contains = {
//     // //                 data: {
//     // //                     descricao,
//     // //                     ProfileId,
//     // //                     imgPost: {

//     // //                         create: {
//     // //                             imgUrl: "https://imagempostbucket.s3.sa-east-1.amazonaws.com/" + Key
//     // //                         }
//     // //                     }
//     // //                 }
//     // //             }

//     // //             return await createPost(Contains)
//     // //         }

//     // //         const NoContains: AllTypes.noContains = {
//     // //             data: {
//     // //                 descricao,
//     // //                 ProfileId
//     // //             }
//     // //         }

//     // //         return await createPost(NoContains)


//     // //     }
//     // //     )
//     // // }


//     // // async delete(req: Request, res: Response) {

//     // //     const { name_Bucket } = req.body;


//     // //     const user = await CadastroUnique(req.userId as string)







//     // //     const result = await S3delete()

//     // //     res.json({ result })

//     // // }

//     // // async AllPosts(req: Request, res: Response) {

//     // //     try {


//     // //         const ProfileCookie = req.cookies.ProfileCookie;

//     // //         const RedisCookie = await redisClient.get(`user-${req.userId}`)

//     // //         if (ProfileCookie != RedisCookie) throw new CustomErrror("Algo deu errado, faça login novamente", 408)


//     // //         const RedisProfile = JSON.parse(await redisClient.get(`user-${req.userId}-profile`) as string)

//     // //         const Posts = await prismaClient.profile.findUnique({
//     // //             where: {
//     // //                 id: RedisProfile.Profile.id
//     // //             },
//     // //             select: {
//     // //                 post: {
//     // //                     orderBy: {
//     // //                         created: "desc"
//     // //                     },
//     // //                     include: {
//     // //                         imgPost: true
//     // //                     }
//     // //                 }

//     // //             }
//     // //         })

//     // //         res.send(Posts)
//     // //     } catch (e) {
//     // //         if (e instanceof CustomErrror) {
//     // //             res.status(e.codigo).json({ status: "error", message: e.mensagem })
//     // //         }
//     // //     }
//     // // }
// }

// export default CreatePostController