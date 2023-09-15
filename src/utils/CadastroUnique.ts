import { prismaClient } from "../databse"

export default async  (id:string) => {
    const cadastro = await prismaClient.cadastro.findUnique({
        where: {
            id

        },
        include: {
            Profile: {
            include: {
                ImgPerfil: {
                    select: {
                        id: true,
                        imgUrl: true,
                    
                    }

                },
                post: {
                    select: {
                        id: true
                    }
                }
            }
            }
        },

    })

    return cadastro
}