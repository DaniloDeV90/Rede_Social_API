import CustomErrror from "../../../errors/ErrosLogin/CustomError";


export class AddImagemProfileUseCase {
    constructor () {}

   async  execute (idUser: string, file: Express.Multer.File, error: CustomErrror ) {


if (error instanceof CustomErrror) throw new CustomErrror (error.mensagem,error.codigo)
  




    }
}

        // const cadastro = await CadastroUnique (req.userId as string)

        // if (!cadastro?.Profile?.id) return res.json({ errors: "Voce precisa de um perfil primeiro!!" })

        // return uploadd(req, res, async (err) => {

           

        //     if (err instanceof Error) {
        //         return res.json({ errors: err.message })
        //     }
        //     if (err) {
        //         return res.json({ errors: "erro" })
        //     }

        //     const id: string = cadastro.Profile?.ImgPerfil?.id as string;
        //     const Key =   req.file?.originalname.replace (/\s+/g, "") as string + Date.now ()
             
        //     const foto = req.file as Express.Multer.File
        //     const params: paramsS3  =  {
        //         Bucket: process.env.AWS_FOTO_PROFILE as string, 
        //         Key,
        //         ContentType:  foto.mimetype ,
        //         Body:  req.file?.buffer as Buffer,
        //         ACL: 'public-read'
              
            
        //     }

      
        //     if ( !await S3upload (params)) return res.status (404).json ({errors: "erro ao adicionar imagem" })
        //   console.log (req.cookies)

        //     const imgUl = await prismaClient.imgPerfil.update({
        //         where: { id },
        //         data: {
        //             imgUrl: "https://redesocbucket.s3.sa-east-1.amazonaws.com/" +  Key
        //         }
        //     }).catch(e => res.json(e))
        //         .then(() => res.json("sucesso"))
        //     return imgUl
