import express from "express"
import helmet from "helmet"
import { resolve } from "path"
import cors from "cors"
import PofileRouters from "./routes/ProfileRouters"
import CadastroRouters from "./routes/CadastroRouters"
import { loginRouters } from "./routes/LoginRouters"
import HomeRouter from "./routes/HomeRouters"
import PostRouters from "./routes/PostRouters"
import ComentarioRouters from "./routes/ComentarioRouters"
import ImageProfile from "./routes/ImageProfile"
import cookiesParser from "cookie-parser"
import http from "http"
import configureSocket from "./WebSockets/CreatePostSocket"

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
    this.app.use("/", HomeRouter)
    this.app.use("/cadastro", CadastroRouters)
    this.app.use("/profile", PofileRouters)
    this.app.use("/login", loginRouters)
    this.app.use("/post", PostRouters)
    this.app.use("/comentarios", ComentarioRouters)
    this.app.use("/imagesprofile", ImageProfile)


  }


}


const serverHttp = http.createServer(new App().app)
configureSocket(serverHttp)

export { serverHttp }

