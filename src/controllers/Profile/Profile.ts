import { Request, Response } from "express"
import { prismaClient } from "../../databse";

class CreateProfile {

    async Create(req: Request, res: Response) {
//         const id = req.userId


//         const { username, sexo } = req.body;



//         console.log(username, sexo)
// console.log (id)
//         const criado = await prismaClient.profile.create({
//             data: {
//                 sexo,
//                 username,
//                 Cadastro: {
//                     connect: {
//                         id: id
//                     }
//                 }

//             }
//         })
//        await prismaClient.imgPerfil.create({
//             data: {
//                 Profile: {
//                     connect: {
//                         id: criado.id
//                     }
//                 }
//             }
//         }).catch (e => res.json (e))
//         .then (e => res.json ("tudo certo"))
      
        
//     }
}
}

export default new CreateProfile();