export interface IImageProfileRepository {
    AddImagemProfile (idUser: string, urlImg: string): Promise <void>
}