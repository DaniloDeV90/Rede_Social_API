import {Router} from "express"
import PostController from "../controllers/Post/PostController";


import  Login from  "../middlewares/Login"
const postController = new PostController ();
const router = Router ();


router.post ("/", Login.Add,  postController.CreatePost)
router.delete ("/", Login.Add, postController.delete)

export default router