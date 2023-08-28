import { Request, Response } from "express"



class Home {


    async home(req: Request, res: Response) {

        res.json ("FEITO!")
      



    }
}
export default new Home();