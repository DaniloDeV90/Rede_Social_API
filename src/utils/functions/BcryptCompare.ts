import bcrypt from "bcryptjs"

export default async (password: string, database_passwotrd: string): Promise<boolean> => {
    return await bcrypt.compare(password, database_passwotrd)
}