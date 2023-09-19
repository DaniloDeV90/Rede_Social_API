import { Request, Response } from "express"
import upload  from "../../utils/MulterCloudConfig";
import S3UploadConfig from "../../utils/S3UploadConfig";

type paramsS3 = {
    Bucket: string,
    Key: string,
    Body: Buffer,
    ACL: string

}

const uploard = upload.single("foto")

class UploadNuvem {
    async up(req: Request, res: Response) {


        return uploard(req, res, async (err) => {


            if (err instanceof Error) {
                return res.json(err.message)
            }

 
            const params: paramsS3  =  {
                Bucket: process.env.AWS_NAME_BUCKET as string, 
                Key: req.file?.originalname.replace (/\s+/g, "") as string + Date.now (),
                Body:  req.file?.buffer as Buffer,
                ACL: 'public-read'
              
            
            }

      
            if ( !await S3UploadConfig (params)) return res.status (404).json ({errors: "erro ao adicionar imagem" })

            res.status (200).json ("sucesso")
            
        

        })
    }
}

export default new UploadNuvem()