import { Request, Response } from "express"
import crypt from "crypto-js"
import { redisClient } from "../../utils/config/RedisConfig";




class Cookie {


    async setCookie(req: Request, res: Response) {


        try {

            const ProfileUser = await redisClient.get(`user-${req.userId}`)

            const crypto = crypt.AES.encrypt(ProfileUser as string, process.env.KEY_SECRET as string).toString()


            res.cookie('token', crypto, { maxAge: 3600000, httpOnly: true });

            res.send(true)




        } catch (e) {

            res.json({ errors: "erro interno" })

        }




    }


    async getCookie(req: Request, res: Response) {

        try {
            const mycookie = req.cookies.token as string
            if (!mycookie) return res.status(400).json({ errors: "sem cookie" }

            )
            const bytes = crypt.AES.decrypt(mycookie, process.env.KEY_SECRET as string)

            return res.json(JSON.parse(bytes.toString(crypt.enc.Utf8)))
        } catch (e) {
            res.status(404).json({ erros: "erro interno" })
        }

    }
    async  deleteCookie(req:Request,res:Response) {
        try {

            res.clearCookie ("token")
            res.status (200).send (true)
        } catch (e) {

            res.status (404).json ({errors: "erro interno"})
        }
    }

}
export default new Cookie();