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
    const chat = this.io().of("/chat")

    post.use(async (socket, next) => {

      try {
        const cookies = socket.request.headers.cookie
        console.log("d")

        const id = await this.socketAuhtentication.handle(cookies as string)
        socket.handshake.auth.id = id
     
        next()
      } catch (error) {
        next(new CustomErrror("erro ao enviar foto", 401))
      }

    })
    interface users {
      username: string
      id: string
    }
    let usersOnline: users[] = []
    post.on("connect", (socket) => {
      console.log("cliente conectado!!")
      socket.on("createPost", (post) => {

        const FileConfig = post.file as fileConfig

        createPostController.handle(socket, FileConfig)


        socket.disconnect()

      })
    })


    chat.on("connect", (socket => {


      socket.on("login", (username: string) => {
        console.log("conectado!!")
        usersOnline.push({ username, id: socket.id })
      })


      socket.on("enviarMensagem", (senderId: string, receiverId: string, message: string) => {

        console.log ("sad")
        const user = usersOnline.find(user => user.username === receiverId)

        if (user?.id) {
        
          chat.to(user.id).emit("mensagem_recebida", { senderId, message })
        }
      })

      socket.on("disconnect", (reason) => {



        usersOnline = usersOnline.filter(user => user.id != socket.id)

        console.log(usersOnline, "desconenctado")

      })

    }))


  }

}
