const express = require("express");
const passport = require("passport");
const authRoute = express()
// const clientUrl = "http://localhost:3000"
const clientUrl = "https://shopnow-green.vercel.app"

authRoute.get("/login/success", async (req,res,next)=>{
    // console.log("login success get 1", req.user)
    try {
        if(req.user){
            let user = req.user
            let token = await user.generateToken();

        let cookieOptions = {
            httpOnly: true,
            maxAge: (24 * 60 * 60 * 1000)
        };

        res.cookie("jwt", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: "User login success !",
            user: user
        });

        }
        else{
            res.status(401).json({
                message : "guest or user not authorized !"
            })
            // console.log("error in login success")
        }
    } catch (error) {
        res.status(401).json({
            message : error
        })
        // console.log("google login faild 1", error )
        
    }
})


authRoute.get("/login/failed", async (req, res, next)=>{
    // console.log("login failed", req.authInfo)
    try {
        res.status(401).json({
            message : "Login failed !"
        })
    } catch (error) {
        res.status(401).json({
            message : error
        })
        // console.log("google login faild 2", error )
    }
})

// google - google athenticate
authRoute.get(
    '/google', 
    passport.authenticate('google', {scope : ['email','profile']} ));

authRoute.get(
    '/google/callback', 
    passport.authenticate('google', 
    { 
        successRedirect : clientUrl,
        failureRedirect: '/login/failed' 
    }
    ), (req, res)=>{
    // console.log("login success get 2", req.user)

        res.redirect(clientUrl)
    })

    module.exports = authRoute
