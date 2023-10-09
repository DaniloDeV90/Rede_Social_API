import { Token } from "../entities/Token";


export interface IAuthenticatedRepository {
    CreateToken (idUser: string, token: string):  Promise <Token >

    IsAuthenticated (idUser: string): Promise <Token> 

    delete (Id:string): Promise <void>
}
