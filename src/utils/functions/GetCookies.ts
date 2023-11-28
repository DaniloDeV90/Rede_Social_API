export const GetCookie = (cookie: string, keycookie: string): string | null => {


   
    if (cookie === undefined) return null
    const cookiesArray = cookie.split("; ")


    if (cookiesArray.length > 20) return null


    for (const cookies of cookiesArray) {
        const [key, cookie] = cookies.split("=")
        if (key === keycookie) return cookie
    }

    return null



}