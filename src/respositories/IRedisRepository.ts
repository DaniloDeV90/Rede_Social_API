export interface IRedisRepository {
    get(key: string): Promise<string>;
    set(key: string, value: string): Promise<void>;
    del(key: string): Promise<void>;
    deleteKeysBD(): Promise<void>;
    ClosedRedis(): Promise<void>;
}