import { redisClient } from "../../utils/config/RedisConfig";
import { IRedisRepository } from "../IRedisRepository";

export class RedisRepository implements IRedisRepository {
    async del(key: string): Promise<void> {
        await redisClient.del(key)
    }
    async get(key: string): Promise<string> {

        return await redisClient.get(key) as string
    }
    async set(key: string, value: string): Promise<void> {

        await redisClient.set(key, value)
    }
}