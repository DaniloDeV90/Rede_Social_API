import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";


type paramsS3 = {
    Bucket: string,
    Key: string,
    Body: Buffer,
    ACL: string

}
const s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION as string,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    }

});


export const S3upload = async (params: paramsS3): Promise<boolean> => {

    let retorno: boolean = true

    const command = new PutObjectCommand(params)

    await s3.send(command).then(() => retorno = true)
        .catch((err) => {
            console.log(err)

            retorno = false
        })

    return retorno
}

export const S3delete = async () => {
    const params = {
        Bucket: process.env.AWS_NAME_BUCKET,
        Key: "CapturadeTela(1).png1694921487676"
    }
    const command = new DeleteObjectCommand(params)

    s3.send(command).then(() => true)
        .catch(() => false)



}