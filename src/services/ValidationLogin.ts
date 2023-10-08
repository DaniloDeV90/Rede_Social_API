
import CustomErrror from "../errors/ErrosLogin/CustomError"
import { IvalidationLogin } from "./IvalidationLogin"
import { Ilogin } from "../entities/Login"



export class ValidationLogin implements IvalidationLogin {

    LoginIsValid(data: Ilogin): void {

        if (!(data.password &&
            data.email)) throw new CustomErrror("Campos vazios!", 408)
    }
}
