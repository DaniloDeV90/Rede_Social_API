
import { Authenticated } from "./authenticationmiddleware";
import { AuthenticationStrategy } from "./strategy";


const authenticated = new Authenticated (new AuthenticationStrategy ())
console.log ("assd")


export { authenticated}