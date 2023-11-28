import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { IS3Bucket } from "../../../respositories/IS3bucket";
import UploadNuvem, { fileConfig } from "../../../utils/functions/UploadNuvem";
import { IpostRepository } from "../../../respositories/IPostRepository";


export class PostCreateUseCase {
    constructor(private S3Bucket: IS3Bucket, private postRepository: IpostRepository) { }

    async execute(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, data: fileConfig): Promise<void> {


        const idUser = socket.handshake.auth.id
        const img = UploadNuvem({ FileConfig: data.FileConfig })

        if (img) {
            await this.S3Bucket.S3upload(img)
            const post = await this.postRepository.createPostWithImage(idUser.id as string, { imgUrl: img?.Key as string, descricao: "hoje sem duvidas é um dos dias" })
            console.log(post)
            console.log("Aba de criação")
        }


    }
}