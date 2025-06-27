import jwt from 'jsonwebtoken'
import { generateAccessToken } from './userController.js'

export const refreshToken = (req,res) => {
    try {
        const cookie = req.cookies;
        const refreshToken = cookie.jwt
        // console.log("token",refreshToken);
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET, (err,decoded) => {
            if(err) return res.status(403).json({message: err.message});
            const { username,role } = decoded;
            const accessToken = generateAccessToken({username,role});
            return res.status(201).json({message: 'Token created',username,role,accessToken});
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error});
    }
}