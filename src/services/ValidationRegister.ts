import moment from "moment"
import validator from "validator"

import { IcreateRegisterUseCase } from "../interfaces/Register/CreateRegisterUseCase"



export class ValidationRegister {


    constructor(private UserValidation: IcreateRegisterUseCase) { }


    checkEmptyFields(): boolean {



        return !(this.UserValidation.data_nasc &&
            this.UserValidation.email &&
            this.UserValidation.nome &&
            this.UserValidation.password)
    }

    isNameTooShort(): boolean {
        return this.UserValidation.nome.length < 5
    }

    isEmailValid(): boolean {
        return !validator.isEmail(this.UserValidation.email)
    }
    isDateValid(): boolean {
        const invaliDate = new Date(this.UserValidation.data_nasc)

        if (invaliDate.toString() === "Invalid Date") return false

        const dateFormat = moment(this.UserValidation.data_nasc, "YYYY-MM-DD");


        if (dateFormat.toDate() >= new Date()) return false


        if (!(new Date(dateFormat.toDate().setFullYear(dateFormat.toDate().getFullYear() + 16)) <= new Date())) return false



        return dateFormat.isValid();
    }
}
