
import jwt from "jsonwebtoken"

export default  (id:  string ): string => {
    
    
    const TOKEN = process.env.TOKEN as string

    const token = jwt.sign({ id }, TOKEN, {
        expiresIn: "1d"
    })

    return token

    
}
