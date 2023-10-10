import { Profile } from "../../../entities/Profile";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { IvalidationCreateProfile } from "./IvalidationsCreateProfile";

export class ValidationCreateProfile implements IvalidationCreateProfile {
    ProfileIsValid(profile: Profile): void {

        const gender = ["masculino", "feminino", "não-binário"]

        if (!(profile.sexo && profile.username)) throw new CustomErrror("Campos vazios!", 408)

        if (profile.username.length < 5 || profile.username.length > 40) throw new CustomErrror("Username deve ter  no máximo 40 caracteres e no mínimo 5", 408)


 
        if (!(gender.includes(profile.sexo))) throw new CustomErrror("Gênero inválido!", 408)


    }
}