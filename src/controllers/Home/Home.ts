import { Request, Response } from "express"
import { redisClient } from "../../utils/config/RedisConfig";
import CustomErrror from "../../errors/ErrosLogin/CustomError";
import { prismaClient } from "../../databse";
import JwtVerifyToken from "../../utils/functions/JwtVerifyToken";

type profile = {
    username: string;
    sexo: string;
    ImgPerfil: {
        id: string;
        imgUrl: string | null;
    } | null;
}

class Home {


    async home(req: Request, res: Response) {



  
        const cookie = req.cookies.ProfileCookie

        const cookieRedis = await redisClient.get(`user-${req.userId}`)

        if (cookie != cookieRedis) throw new CustomErrror("Houve algum erro, logue novamente!!", 402)

        const id = JwtVerifyToken(cookieRedis as string)

        const RedisProfileClient = await redisClient.get(`user-${req.userId}-profile`).then(response => response)




        if (!RedisProfileClient) {
            const User = await prismaClient.cadastro.findUnique({
                where: {
                    id: id.id
                },
                select: {
                 
                    Profile: {
                        select: {
                            id: true,
                            ImgPerfil: {
                                select: {
                                    imgUrl: true,
                                    id: true
                                }
                            },
                            username: true,
                            sexo: true
                        }
                    }
                }
            })
        
            
            console.log ("Mano postgre")
            await redisClient.set(`user-${req.userId}-profile`, JSON.stringify(User))
          
            return res.json(User)

        }


        return res.json(JSON.parse (RedisProfileClient))


    }




}
export default new Home();