import { Profile } from "../../entities/Profile";

 

export interface IvalidationCreateProfile {
    ProfileIsValid (profile: Profile): void
}