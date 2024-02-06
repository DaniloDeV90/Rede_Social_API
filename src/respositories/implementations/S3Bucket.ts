import { paramsS3 } from "../../utils/types/Params";
import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { IS3Bucket, IdeleteImageBucket, IparamsS3 } from "../IS3bucket";

import { s3client } from "../../services/S3Service";
import CustomErrror from "../../errors/ErrosLogin/CustomError";


export class S3BucketRepository implements IS3Bucket {

    async S3upload(options: IparamsS3): Promise<boolean> {

        try {

            const command = new PutObjectCommand(options)

            await s3client.send(command)

            return true

        } catch (error) {

            throw new CustomErrror("Erro ao enviar imagem", 408)


        }




    }

    async S3delete(options: IdeleteImageBucket): Promise<boolean> {
        console.log ("dd")
        try {

    
            const command = new DeleteObjectCommand(options)
            await s3client.send(command).catch (err => console.log ("erro ai paizao")) 

            return true

        } catch (erro) {
            console.log ("asdasddsa")
            throw new CustomErrror("Erro ao  apagar imagem", 408)
        }
    }
}

