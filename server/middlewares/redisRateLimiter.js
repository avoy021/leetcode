import {getRedisClient} from "../config/connectRedisDb.js";

const redisRateLimiter = (args) => {
    const {rateLimit,endpoint} = args;
    return async (req,res,next) => {
        try {
            const redisClient = getRedisClient();
            const redisKey = `${endpoint}/${req.ip}`;
            const requests = await redisClient.incr(redisKey);
            if(requests===1) {
                await redisClient.expire(redisKey,rateLimit.time);
            }
            if(requests>rateLimit.limit) {
                return res.status(429).json({message: 'Redis says Too many requests'})
            }
            next();
        } catch (error) {
            console.log(error)
        }
    }
}

export default redisRateLimiter