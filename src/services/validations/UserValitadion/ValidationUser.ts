import moment from "moment"
import validator from "validator"
import { User } from "../../../entities/User"
import { IvalidationUser } from "./IvalidationUser"
import CustomError from "../../../errors/ErrosLogin/CustomError"



export class ValidationUser implements IvalidationUser {

    UserIsValidate(User: User): void {

        if (!(User.data_nasc &&
            User.email &&
            User.nome &&
            User.password)) throw new CustomError("Campos vazios", 408)
        if (User.nome.length < 5) throw new CustomError("Nome muito curto", 408)
        if (User.nome.length > 40) throw new CustomError("Nome muito longo", 408)
        if (!validator.isEmail(User.email)) {

            throw new CustomError("Email invalido", 408)
        }

        if (User.data_nasc.toString().length != 10) {

            throw new CustomError("Data inválida", 408)

        }

        const invaliDate = new Date(User.data_nasc)


        if (invaliDate.toString() === "Invalid Date") {

            throw new CustomError("Data inválida", 408)

        }

        const dateFormat = moment(User.data_nasc, "YYYY-MM-DD");

        if (dateFormat.toDate() >= new Date()) {
            throw new CustomError("Data inválida", 408)
        }


        if (!(new Date(dateFormat.toDate().setFullYear(dateFormat.toDate().getFullYear() + 16)) <= new Date())) {

            throw new CustomError("Data inválida", 408)

        }
        if (dateFormat.toDate().getFullYear() <= 1920) {

            throw new CustomError("Data inválida", 408)

        }
        if (!dateFormat.isValid()) {

            throw new CustomError("Data invalida", 408)

        }
    }
}
