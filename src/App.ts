import express from "express"
import helmet from "helmet"
import { resolve } from "path"
import cors from "cors"
import CreateProfile from "./routes/CreateProfile"
import CadastroRouters from "./routes/CadastroRouters"
import LoginRouter from "./routes/LoginRoute"
import HomeRouter from "./routes/HomeRouter"
import createPostRouter from "./routes/PostRouters"
import Comentarios from "./routes/ComentarioRouters"
import http from "http"


class App {
  public app = express();
  constructor() {


    this.middlewares()
    this.routes()
  }

  public middlewares(): void {
    this.app.use (cors ())
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(resolve(__dirname, "image")))
  }

  public routes(): void {
    this.app.use("/", HomeRouter)
    this.app.use("/cadastro", CadastroRouters)
    this.app.use("/createprofile", CreateProfile)
    this.app.use("/login", LoginRouter)
    this.app.use ("/post", createPostRouter)
    this.app.use ("/comentarios", Comentarios)
  }
}

const serverHttp = http.createServer(new App().app)

export { serverHttp }