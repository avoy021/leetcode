import { createClient } from 'redis';

let redisClient;
export const connectRedis = async() => {
    try {
        redisClient = createClient({
            url: `${process.env.REDIS_URL}`
        })
        await redisClient.connect();   
        console.log('Redis db connected')
    } catch (error) {
        console.log('Redis Client Error', error)
    }
}

export const getRedisClient = () => {
    if(!redisClient) {
        throw new Error('Initialize the redis server');
    }
    return redisClient
}
