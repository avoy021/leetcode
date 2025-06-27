import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 30*1000 ,// 15s
    limit: 2,
    handler: (req,res) => {
        return res.status(429).json({message:'Too many requests!'})
    }
})

export default limiter