import { Response, Request } from "express"

import { redisClient } from "../../utils/config/RedisConfig"

 class Authenticated {
    async authenticated(req: Request, res: Response) {
        const token = req.cookies.ProfileCookie
        if (!token) res.json(false)

        const redisUser = await redisClient.get("user-" + req.userId)

        if (token != redisUser) res.json(false)

        res.json(true)



    }
}

export default new  Authenticated ()