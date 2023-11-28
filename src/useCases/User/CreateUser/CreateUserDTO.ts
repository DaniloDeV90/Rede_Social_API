import { IprofileDTO } from "../../Profile/CreateProfile/CreateProfileDTO";

export interface IcreateUserRequestDTO {
    id?: string,
    nome: string,
    email: string,
    password: string,
    data_nasc:Date,


}