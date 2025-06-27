import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import problemRoute from './routes/problemRoute.js';
import userRoute from './routes/userRoute.js';
import refreshRoute from './routes/refreshRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import corsOptions from './config/corsOptions.js';
import connectDB from './config/connectDB.js';
import mongoose from 'mongoose';
import { connectRedis, getRedisClient } from './config/connectRedisDb.js';
import googleRoute from './routes/googleAuthRoute.js'
import passport from './config/passportAuth.js'

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize())
app.use('/', googleRoute)
app.use('/api/user', userRoute);
app.use('/api/user', problemRoute);
app.use('/refresh', refreshRoute);

app.get('/', (req,res) => {
    res.send('Home Page');
})

//not a good practice to open the server using mongoose.once
//if server is crashed then this can cause problem as mongoose.once is used
mongoose.connection.once('open' ,async () => {
    console.log(mongoose.connection.host);
    try {
        await connectRedis();
        const redisClient = getRedisClient();
        if(redisClient.isReady){
            app.listen(PORT,() => console.log(`Server is running at http://localhost:${PORT}`));
        }
    } catch (error) {
        console.log(error)
    }
})