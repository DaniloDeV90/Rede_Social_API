import { prismaClient } from "../../databse"
import { S3upload } from "../../services/S3Service"
import { PostTypes, paramsS3 } from "../types/Params"




export default async (configTypes: PostTypes) => {
    const Files = configTypes.FileConfig

    const buffer = Buffer.from(Files?.FileBuffer as ArrayBuffer)
    const Key = configTypes.textArea?.replace(/\s+/g, "") as string + Date.now()
    if (Files) {

        const params: paramsS3 = {
            Bucket: process.env.AWS_NAME_BUCKET as string,
            Key,
            ContentType: Files.FileType,
            Body: buffer,
            ACL: 'public-read'


        }

        await S3upload(params).then(() => true)
            .catch(() => { return false })
        const post = await prismaClient.post.create({
            data: {
                ProfileId: configTypes.id,
                descricao: configTypes.textArea,
                imgPost: {
                    create: {
                        imgUrl: "https://imagempostbucket.s3.sa-east-1.amazonaws.com/" + Key
                    }
                }
            },
            include: {
                imgPost: true
            }



        }).then((post) => post)

        return post
    } else {

        const post = await prismaClient.post.create({
            data: {
                ProfileId: configTypes.id,
                descricao: configTypes.textArea,
            }
        }).then(e => e)

        return post
    }


}
