import { Profile } from "../entities/Profile";


export interface findProfile{
    username: string,
    sexo: string,
    ImgPerfil: {
        imgUrl: string 
    }

}
export interface IprofileRepository {

    createProfile(idCadastro: string, data: Profile): Promise<Profile>
    deleteProfile(idCadastro: string): Promise<void>
    findProfile (idCadastro:string): Promise <findProfile>
}