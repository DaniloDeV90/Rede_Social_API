
import { Socket } from "socket.io";
import { fileConfig } from "../../../utils/functions/UploadNuvem";
import { PostCreateUseCase } from "./PostCreateUseCase";
import { DefaultEventsMap } from "socket.io/dist/typed-events";



export class PostCreateController {
    constructor(private PostCreateUseCase: PostCreateUseCase) { }

    async handle(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, data: fileConfig) {



      await this.PostCreateUseCase.execute(socket, data)
  


        console.log("Post concluido!")
    }
}