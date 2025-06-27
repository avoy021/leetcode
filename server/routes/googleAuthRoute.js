import express from "express";
const router = express.Router();
import passport from "../config/passportAuth.js";
import { googleLoginController, googleRegisterController } from "../controllers/userController.js";


// route: Google oauth registration route
router.get(
  "/auth/google/register",
  passport.authenticate("google-register", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/register/callback",
  passport.authenticate("google-register", {
    failureRedirect: "/register/failure",
    session: false
  }),
  googleRegisterController
);

router.get("/register/failure", (req, res) => {
  try {
    return res.redirect('/accounts/login')
  } catch (error) {
    console.log(error);
  }
});

// route: Google oauth login route
router.get(
  "/auth/google/login",
  passport.authenticate("google-login", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/login/callback",
  passport.authenticate("google-login", {
    failureRedirect: "/login/failure",
    session: false
  }),
  googleLoginController
);

router.get("/login/failure", (req, res) => {
  try {
    return res.redirect('/accounts/login')
  } catch (error) {
    console.log(error);
  }
});

export default router;
