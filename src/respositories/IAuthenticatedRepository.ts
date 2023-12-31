import { Token } from "../entities/Token";


export interface IAuthenticatedRepository {
    SaveToken(idUser: string, token: string):  Promise <Token>

    IsAuthenticated (idUser: string): Promise <Token >  

    UpdatedToken (idUser:string, token:string): Promise <Token>
    delete (Id:string): Promise <void>
}
