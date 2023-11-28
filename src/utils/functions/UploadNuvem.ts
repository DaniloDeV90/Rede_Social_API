
import { PostTypes, paramsS3 } from "../types/Params"
export interface fileConfig {
    FileConfig: {
        Filename: string;
        FileSize: number;
        FileBuffer: ArrayBuffer;
        FileType: string;
    } | null;
}



export default  (configTypes: fileConfig) => {
    const Files = configTypes.FileConfig

    const buffer = Buffer.from(Files?.FileBuffer as ArrayBuffer)
    const Key = configTypes.FileConfig?.Filename?.replace(/\s+/g, "") as string + Date.now()
    if (Files) {

        const params: paramsS3 = {
            Bucket: process.env.AWS_NAME_BUCKET as string,
            Key,
            ContentType: Files.FileType,
            Body: buffer,
            ACL: 'public-read'


        }


        return params
    }


}