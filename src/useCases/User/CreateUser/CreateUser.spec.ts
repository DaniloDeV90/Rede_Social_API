import { expect, it } from "vitest";
import { User } from "../../../entities/User";
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { ValidationUser } from "../../../services/validations/UserValitadion/ValidationUser";

it("should throw error for invalid dates", () => {
    const uservalidate = new ValidationUser();

    //Teste para verificar algumas datas inválidas de nascimento
    const testCases = [
        { date: new Date() },
        { date: new Date("2025-10-15") },
        { date: new Date("1300-10-15") },

    ];

    testCases.forEach((testCase) => {
        const { date } = testCase;

        const user = new User({
            data_nasc: date,
            nome: "Jonhn Doe",
            password: "123",
            email: "example@gmail.com"
        });


        expect(() => uservalidate.UserIsValidate(user)).toThrowError(CustomErrror);
    });
});

it("should throw error for invalid name", () => {
    const uservalidate = new ValidationUser();


    const testCases = [
        { nome: "" },
        { nome: "a" },
        { nome: "ksahjfsdhfkhsdfjshkfjhjsdkfhjsdhfjhsdjhjskdfjksdfjsdfjksdjkfjsdhfjksfhjksdhfjkshdjfksdjkfjksdfjksdjkfhsjkdhfjkshdfjksdjkfhjksdhfjksdhfjkhsdjkfh" },
    ]




    testCases.forEach(ev => {
        const { nome } = ev
        const user = new User({
            data_nasc: new Date("2004-03-05"),
            nome,
            password: "123",
            email: "example@gmail.com"
        })

        expect(() => uservalidate.UserIsValidate(user)).toThrowError(CustomErrror);
    });
});






