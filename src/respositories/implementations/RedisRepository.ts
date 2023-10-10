import { redisClient } from "../../utils/config/RedisConfig";
import { IRedisRepository } from "../IRedisRepository";

export class RedisRepository implements IRedisRepository {
    async del(key: string): Promise<void> {
        await redisClient.del(key)

     
    }
    async get(key: string): Promise<string> {

        const redis = await redisClient.get(key) as string
    

        return redis
    }
    async set(key: string, value: string): Promise<void> {

        await redisClient.set(key, value)
       
    }
    async deleteKeysBD(): Promise<void> {

        await redisClient.flushdb()
    }

    async ClosedRedis (): Promise <void> {
        await redisClient.quit ()
    }
}

