import express from "express"
import helmet from "helmet"
import { resolve } from "path"
import cors from "cors"
import PofileRouters from "./routes/ProfileRouters"
import CadastroRouters from "./routes/CadastroRouters"
import LoginRouters from "./routes/LoginRouters"
import HomeRouter from "./routes/HomeRouters"
import PostRouters from "./routes/PostRouters"
import ComentarioRouters from "./routes/ComentarioRouters"
import FotosRouters from "./routes/FotosRouters"
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
    this.app.use("/createprofile", PofileRouters)
    this.app.use("/login", LoginRouters)
    this.app.use ("/post", PostRouters)
    this.app.use ("/comentarios", ComentarioRouters)
    this.app.use ("/fotos", FotosRouters)
  }
}

const serverHttp = http.createServer(new App().app)

export { serverHttp }