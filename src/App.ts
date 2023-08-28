import express from "express"
import helmet from "helmet"
import {resolve} from "path"
import  CreateProfile from "./routes/CreateProfile"
import CadastroRouters from "./routes/CadastroRouters"
import LoginRouter from "./routes/LoginRoute"

class App {
  public app = express  ();
constructor () {
    

    this.middlewares ()
    this.routes ()
}

 public middlewares ():void {
     this.app.use (helmet ())  
    this.app.use (express.json ())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use (express.static (resolve (__dirname, "image")))
 }

 public routes ():void {
  this.app.use ("/",)
    this.app.use ("/cadastro", CadastroRouters)
    this.app.use ("/createprofile", CreateProfile)
    this.app.use ("/login", LoginRouter)
 }
} 

export default new App ().app;