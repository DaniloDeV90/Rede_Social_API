
import { Request, Response } from "express-serve-static-core";

import FotoConfig from "./FotoConfig";


const upload = FotoConfig.single("foto")

class FotoController {


    store(req: Request, res: Response) {
        try {


            return upload(req, res, async (err) => {

                if (err instanceof Error) {
                    return res.json({ errors: err.message })
                }
                if (err) {
                    return res.json("erro")
                }
                res.json({success: "sucesso"})
            })
        } catch (error) {
            return res.status(404).json({ erros: "erro interno" })
        }
    }
}

export default new FotoController()