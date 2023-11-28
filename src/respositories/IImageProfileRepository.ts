import { IimageProfileDTO } from "../useCases/Profile/AddImageProfile/AddImagemProfileDTO";
import { IImageDeleteDTO } from "../useCases/Profile/DeleteImageProfile/DeleteImageProfileDTO";

export interface IdeleteImage {
    ImgPerfil: {
        id: string;
        nameImg: string | null;
        imgUrl: string | null;
        profile_id: string;
    } | null;
    
}

export interface IImageProfileRepository {
    AddImageProfile (data: IimageProfileDTO): Promise <void>
    DeleteImagePorfile (data: IImageDeleteDTO ): Promise <void>
    findProfileImage (idUser: string) : Promise <IdeleteImage>
}