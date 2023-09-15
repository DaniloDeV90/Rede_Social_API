import { Request, Response } from "express"
import { prismaClient } from "../../databse";



class Home {


    async home(req: Request, res: Response) {

        const allPosts = await  prismaClient.post.findMany ()
        res.json (allPosts)
      



    }
}
export default new Home();