import passport from "passport";
import {Strategy as GoogleStrategy} from 'passport-google-oauth2'
import dotenv from 'dotenv';
dotenv.config();

passport.use("google-register",new GoogleStrategy({
    clientID: process.env.Google_Client_Id,
    clientSecret: process.env.Google_Client_Secret,
    callbackURL: 'http://localhost:3000/auth/google/register/callback',
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
))

passport.use("google-login",new GoogleStrategy({
    clientID: process.env.Google_Client_Id,
    clientSecret: process.env.Google_Client_Secret,
    callbackURL: 'http://localhost:3000/auth/google/login/callback',
    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
))

export default passport