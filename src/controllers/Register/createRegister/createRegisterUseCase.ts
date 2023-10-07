import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { IcreateRegisterUseCase } from "../../../interfaces/Register/CreateRegisterUseCase";
import { InsertResgister } from "../../../respositories/register/InsertRegister";
import { ValidationRegister } from "../../../services/ValidationRegister"
export class CreateRegisterUseCase {
    async execute({ nome, email, data_nasc, password }: IcreateRegisterUseCase) {

        const validationRegister = new ValidationRegister({
            nome,
            email,
            data_nasc,
            password
        })

        //Validations

        if (validationRegister.checkEmptyFields()) throw new CustomErrror("Campos vazios", 408)

        if (!validationRegister.isDateValid()) throw new CustomErrror("Data inválida", 408)
        if (validationRegister.isEmailValid()) throw new CustomErrror("Email inválido", 408)
        if (validationRegister.isNameTooShort()) throw new CustomErrror("Nome inválido", 408)

        //InsertBD
        const User = await new InsertResgister().handle({ nome, email, data_nasc, password }).then(success => success)
            .catch(erro => erro)

        return User

    }
}