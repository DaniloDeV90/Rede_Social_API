import Redis from "ioredis"
import dotenv from "dotenv"
dotenv.config ()

const redisClient = new Redis ({
    host: process.env.DATABASE_REDIS_URL,
    port:  parseInt (process.env.DATABASE_REDIS_PORT as string),
    password: process.env.DATABSE_REDIS_PASS
});

export {redisClient}
