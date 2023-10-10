import { IaddImagemProfileDTO } from "../useCases/Profile/AddImageProfile/AddImagemProfileDTO";

export interface IImageProfileRepository {
    AddImagemProfile (data: IaddImagemProfileDTO): Promise <void>
}