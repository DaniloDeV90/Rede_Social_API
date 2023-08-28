import {Request,Response} from "express"
import upload from "./FotoNuvemConfig"

const uploard = upload.single  ("foto")

class UploadNuvem {
    async up (req: Request, res: Response) {


        return uploard(req, res, async (err) => {
         
            if (err instanceof Error) {
                return res.json (err.message)
            }
            res.json ("sucesso")

        })
    }
}

export default  new UploadNuvem ()