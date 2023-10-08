import moment from "moment"
import validator from "validator"
import { User } from "../entities/User"
import { IvalidationUser } from "./IvalidationUser"
import CustomErrror from "../errors/ErrosLogin/CustomError"



export class ValidationUser implements IvalidationUser {

    UserIsValidate(User: User): void {

        if (!(User.data_nasc &&
            User.email &&
            User.nome &&
            User.password)) throw new CustomErrror("Campos vazios", 408)
        if (User.nome.length < 5) throw new CustomErrror("Nome muito curto", 408)
        if (!validator.isEmail(User.email)) throw new CustomErrror("Email invalido", 408)
        const invaliDate = new Date(User.data_nasc)
        if (invaliDate.toString() === "Invalid Date") throw new CustomErrror("data inválida", 408)
        const dateFormat = moment(User.data_nasc, "YYYY-MM-DD");
        if (dateFormat.toDate() >= new Date()) throw new CustomErrror("data inválida", 408)
        if (!(new Date(dateFormat.toDate().setFullYear(dateFormat.toDate().getFullYear() + 16)) <= new Date())) throw new CustomErrror("data inválida", 408)
        if (!dateFormat.isValid()) throw new CustomErrror("Data invalida", 408)
    }
}
