

import { RedisRepository } from "../respositories/implementations/RedisRepository";
import { Authenticated } from "./authenticationmiddleware";
import { AuthenticationStrategy } from "./strategy";
const redisRepository = new RedisRepository ()

const authenticated = new Authenticated (new AuthenticationStrategy (redisRepository))



export { authenticated}