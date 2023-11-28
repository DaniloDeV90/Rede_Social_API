// socketConfig.js
import { Server } from "socket.io";
import http from "http";
import { createPostController } from "./useCases/Posts/PostCreate";
import { fileConfig } from "./utils/functions/UploadNuvem";

import CustomErrror from "./errors/ErrosLogin/CustomError";
import helmet from "helmet";
import { SocketAuthentication } from "./utils/functions/SocketAuthentication";



export class Socket {

  constructor(private serverHttp: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, private socketAuhtentication: SocketAuthentication) {

    this.post()
  }

  io() {
    return new Server(this.serverHttp, {
      cors: {
        origin: "http://localhost:5173",
        credentials: true,
      }
    })

  }

  post() {

    this.io().engine.use(helmet())
    const post = this.io().of("/posts")

    post.use(async (socket, next) => {

      try {
        const cookies = socket.request.headers.cookie
        const id = await this.socketAuhtentication.handle(cookies as string)
        socket.handshake.auth.id = id
        next()
      } catch (error) {
      next (new CustomErrror ("erro ao enviar foto" ,  401))
      }

    })

    post.on("connect", (socket) => {

      socket.on("createPost", (post) => {
     
        const FileConfig = post.file as fileConfig

        createPostController.handle(socket, FileConfig)

        socket.disconnect ()
      })

     
    })
  }

}
