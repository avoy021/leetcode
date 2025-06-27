import express from 'express'
import { userLoginController, userSignupController,userLogoutController } from '../controllers/userController.js';
import limiter from '../middlewares/rateLimiter.js';
import redisRateLimiter from '../middlewares/redisRateLimiter.js';
import passport from '../config/passportAuth.js'

const router = express.Router();

const args = {
    endpoint: '/users',
    rateLimit: {
        time: 30,
        limit: 5
    }
}

router
    .post('/register', redisRateLimiter(args), userSignupController)
    .post('/login', redisRateLimiter(args), userLoginController)
    .delete('/logout', userLogoutController)


export default router
