import moment from "moment"
import validator from "validator"
type usuario = {
    nome: string,
    email: string,
    data_nasc: string,
    password: string,
    passwordConfirm: string,
}


export default (Usuarios: usuario): string[] => {

    const errors: string[] = []

    if (!(Usuarios.data_nasc &&
        Usuarios.email &&
        Usuarios.nome &&
        Usuarios.password &&
        Usuarios.passwordConfirm)) errors.push("Campo vazio")


    if (Usuarios.password != Usuarios.passwordConfirm) errors.push("Senhas não conferem!")

    if (Usuarios.nome.length < 5) errors.push("Nome inválido")

    if (!validator.isEmail(Usuarios.email)) errors.push("Email inválido!")

    const dataformatada = Usuarios.data_nasc.replace(/"-"/g, " ")
    const ano = moment(dataformatada, "YYYYMMDD").fromNow()



    if (ano.split(" ")[1].includes("years")) {
        if ((Number(ano.split(" ")[0])) < 16) errors.push("Menor do que 16 anos")

        if ((Number(ano.split(" ")[0])) > 100) errors.push("Insira uma data válida")

    } if (ano.split(" ")[0].includes("Invalid")) {

        errors.push("Formato de data incorreto")
    }


    return errors

}