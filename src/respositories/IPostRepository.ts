import { IcreatePostWithImageDTO } from "../useCases/Posts/PostCreate/PostCreateDTO";

export interface ImgPost {


    id: string;
    imgUrl: string | null;
    postId: string;


}
export interface ICreatePost {

    post: {
        ProfileId: string,
        created: Date,
        descricao: string | null,
        id: string,
        imgPost: ImgPost | null
    }[]

}


export interface IpostRepository {
    createPostWithImage(idUser: string, postdata: IcreatePostWithImageDTO): Promise<void>
}