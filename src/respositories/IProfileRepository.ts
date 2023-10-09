import { Profile } from "../entities/Profile";

export interface IprofileRepository {

    createProfile(idCadastro: string, data: Profile): Promise<Profile>
    deleteProfile(idCadastro: string): Promise<void>
}