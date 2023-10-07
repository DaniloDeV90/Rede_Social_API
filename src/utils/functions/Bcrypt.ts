import bcrypt from "bcryptjs"

export default async (  password: string )  => {
    return await bcrypt.hash(password, 10)
}