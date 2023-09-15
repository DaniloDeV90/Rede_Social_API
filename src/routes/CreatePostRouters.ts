import {Router} from "express"
import CreatePostController from "../controllers/CreatePost/CreatePostController";


import  Login from  "../middlewares/Login"
const createPostController = new CreatePostController ();
const router = Router ();


router.post ("/", Login.Add,  createPostController.CreatePost)

export default router