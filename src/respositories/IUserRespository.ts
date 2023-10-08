import { Ilogin } from "../entities/Login";
import { User } from "../entities/User";



export interface Iupdate {
    nome?: string,
    password?: string
    Token?: string
    data_nasc?: string
}


export interface IusersRespository {
    findByEmail (email:string): Promise <User>
    SaveUser (User: User): Promise<User>
    findByUniqueUser (User: string): Promise <User>
    UpdateUser (id:string,  User:  Iupdate):Promise <User>
}