import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../db/userModel.js'
import bcrypt from 'bcrypt'
import {z} from 'zod'
import generatePassword from 'generate-password'

const userSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
        invalid_type_error: 'Username needs to be a valid email'
    }).email("Please enter a valid email"),
    password: z.string().min(7).max(30)
})

export const userSignupController = async (req,res) => {
    try {
        const { username,password,role } = req.body;
        if(!username || !password || !role) {
            return res.status(400).json({message: 'Username,password or role is missing'});
        }
        const validateSchema = userSchema.parse({username,password});
        const duplicateUser = await User.findOne({ username }).lean().exec();
        if(duplicateUser) {
            return res.status(409).json({message: 'Username already exists.'});
        } 

        const hashPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            username,
            password: hashPassword,
            role
        })

        if(newUser) {
            res.status(201).json({message: `Account created with username: ${username}`});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const userLoginController = async (req,res) => {
    try {
        const { username,password } = req.body;
        if(!username || !password) {
            return res.status(400).json({message: 'Username or password is missing'});
        }

        const loggedUser = await User.findOne({username}).lean().exec();
        if(!loggedUser || !(await bcrypt.compare(password,loggedUser.password))) {
            return res.status(400).json({message: 'Incorrect username or password'});
        }

        const payload = {username, role:loggedUser.role};
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.cookie('jwt',refreshToken, {
            httpOnly: true, // true means only http(server) can access, js cannot
            // secure: false, // true indicates cookies are sent only over HTTPS
            // sameSite: 'None', // for cross-site requests, set it to none
            maxAge: 60*60*1000,
        })
       
        res.status(200).json({message:'Login successful',username,role:loggedUser.role,accessToken});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const generateAccessToken = (payload) => {
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '30s'});
}
export const generateRefreshToken = (payload) => {
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn: '1h'});
}

export const userLogoutController = async(req,res) => {
    if(req.cookies.jwt) {
        res.clearCookie('jwt',{httpOnly:true});
        return res.status(200).json({message: 'Cookie cleared'});
    }
    return res.status(404).json({message: 'No cookie to clear'})
}

export const googleRegisterController = async(req,res) => {
    try {
        const { email:username } = req.user;
        // '*' as the target origin: Allows the message to be sent to any origin. For security, replace * with the exact origin of the parent (e.g., 'http://localhost:5173').
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'

        if(!username) {
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                success:false,
                mssg: `Username is missing`
            }));
            return res.status(200).send(responseHTML);
        }
        const password = generatePassword.generate({
            length: 25,
            numbers: true,
            symbols: true
        })
        const validateSchema = userSchema.parse({username,password});
        const duplicateUser = await User.findOne({ username }).lean().exec();
        if(duplicateUser) {
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                success:false,
                mssg: `Email id already exists try logging in with same account`
            }));
            return res.status(200).send(responseHTML);
        } 

        const newUser = await User.create({
            username,
            password,
            role: 2001
        })

        if(newUser) {
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                success:true,
                mssg: `Account created successfully with username ${username}`
            }));
            return res.status(200).send(responseHTML);
            // res.status(201).json({message: `Account created with username: ${username}`});
        }
    } catch (error) {
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            success:false,
            mssg: `${error.message}`
        }));
        return res.status(200).send(responseHTML);
    }
}

export const googleLoginController = async (req,res) => {
    try {
        const { email:username } = req.user;
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        
        if(!username) {
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                success:false,
                mssg: `Username is missing`
            }));
            return res.status(200).send(responseHTML);
        }

        const loggedUser = await User.findOne({username}).lean().exec();
        if(!loggedUser) {
            responseHTML = responseHTML.replace('%value%', JSON.stringify({
                success:false,
                mssg: `Account with this email doesnt exist`
            }));
            return res.status(200).send(responseHTML);
        }

        const payload = {username, role:loggedUser.role};
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        res.cookie('jwt',refreshToken, {
            httpOnly: true, 
            maxAge: 60*60*1000,
        })
       
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            success:true,
            mssg: `Login successful`,
            username,role:loggedUser.role,accessToken
        }));
        return res.status(200).send(responseHTML);
    } catch (error) {
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            success:false,
            mssg: `${error.message}`
        }));
        return res.status(200).send(responseHTML);
    }
}