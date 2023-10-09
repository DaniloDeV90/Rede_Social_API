import { test, expect } from "vitest";
import { User } from "./User";

test(`create an User`, () => {

    const data_nasc = new Date()
    const email = "test@gmail.com"
    const nome = "John Doe"
    const password = "123"
    const user = new User({ data_nasc, email, nome, password })



    expect(user).toBeInstanceOf(User)
    expect(user.nome).toEqual("John Doe")

})
