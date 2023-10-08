import { Ilogin } from "../entities/Login";

export interface  IvalidationLogin{
    LoginIsValid (data: Ilogin): void

}