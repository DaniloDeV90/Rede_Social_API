export default class CustomErrror extends Error {
    constructor( public mensagem: string,  public  codigo: number) {
        super(mensagem)
        
    }
}