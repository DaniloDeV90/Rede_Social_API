import express from "express"
import helmet from "helmet"
import { resolve } from "path"
import cors from "cors"
import PofileRouters from "./routes/ProfileRouters"
import CadastroRouters from "./routes/CadastroRouters"

import AuthRouters from "./routes/AuthRouters"
import AmizadeRouters from "./routes/AmizadeRouters"
import { loginRouters } from "./routes/LoginRouters"
import PostRouters from "./routes/PostRouters"
import ComentarioRouters from "./routes/ComentarioRouters"
import ImageProfile from "./routes/ImageProfile"
import cookiesParser from "cookie-parser"
import http from "http"
import { Socket } from "./ServerSocket"
import { AuthenticationStrategy } from "./middlewares/strategy"
import { RedisRepository } from "./respositories/implementations/RedisRepository"
import { SocketAuthentication } from "./utils/functions/SocketAuthentication"



const corsConfig = {

  origin: true,
  credentials: true


};

class App {
  public app = express();
  constructor() {


    this.middlewares()
    this.routes()

  }

  public middlewares(): void {
    this.app.use(cors(corsConfig))


    this.app.use(helmet())
    this.app.use(cookiesParser());
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(resolve(__dirname, "image")))

  }

  public routes(): void {
    this.app.use("/cadastro", CadastroRouters)
    this.app.use("/profile", PofileRouters)
    this.app.use("/login", loginRouters)
    this.app.use("/post", PostRouters)
    this.app.use("/comentarios", ComentarioRouters)
    this.app.use("/imagesprofile", ImageProfile)
    this.app.use ("/friend", AmizadeRouters)
    this.app.use("/auth", AuthRouters)


  }


}


const serverHttp = http.createServer(new App().app)
const redisRepository = new RedisRepository()
const authenticationStrategy = new AuthenticationStrategy(redisRepository)
const socketAuhtentication = new SocketAuthentication(authenticationStrategy)
new Socket(serverHttp, socketAuhtentication)


export { serverHttp }

