import express from 'express'
import jwt from 'jsonwebtoken'

const authMiddleware = (req,res,next) => {
    try {
        if(req.headers && req.headers['authorization'] && req.headers['authorization'].startsWith('Bearer')) {
            const token = req.headers['authorization'].split(" ")[1];
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
                if(err) return res.status(403).json({message: 'Token verification failed'});
                const { username,role } = decoded;
                req.user = username;
                req.role = role;
                next();
            })
        }
        else {
            return res.status(401).json({message: 'Token is missing'});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export default authMiddleware;