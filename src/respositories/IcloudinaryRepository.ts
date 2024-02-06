

export  interface profileImg {
    url:string,
    nomeImg: string
} 
export interface IcloudinaryRepository {
    uploadImage (file: Express.Multer.File):  Promise <profileImg>
}