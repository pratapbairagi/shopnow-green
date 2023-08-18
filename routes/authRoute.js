const express = require("express");
const passport = require("passport");
const userAuth = require("../middleware/userAuth");
const authRoute = express();
// const clientUrl = "http://localhost:3000"
const clientUrl = "https://shopnow-green.vercel.app";



// google - google athenticate
authRoute.get(
    '/google', 
    passport.authenticate('google', {scope : ['email','profile']} ));

authRoute.get(
    '/google/callback', 
    passport.authenticate('google', 
    { 
        successRedirect : '/login/success',
        failureRedirect: `/login/failed`,
        authInfo : true
    }
    )
    , (req, res)=>{

       return res.redirect('/login/success')
        
    }
    )


authRoute.route("/login/success").get( async (req,res,next)=>{
    console.log("login success get 1", req.user)
    alert("success")
    try {
        if(req.user){
            alert("req user and req token")
            // let user = req.user

        // getting succes after refreshing page then it redirects to https://shopnow-green.vercel.app/auth/login/success
        // where user details are showing in json format

        let user = req.user
        // let token = await user.generateToken();
        // let cookieOptions = {
        //   httpOnly: true,
        //   maxAge: (24 * 60 * 60 * 1000)
        // };

        // res.cookie("jwt", token, cookieOptions);
        
        console.log("req user", req.user)
        console.log("req cookies", req.cookies)

        // if(req.cookies) window.location.href = "https://shopnow-green.vercel.app"

        }
        else{
        console.log("res user not available", req.user)

            res.status(401).json({
                message : "guest or user not authorized !"
            })
            // console.log("error in login success")
        }
    } catch (error) {
        console.log("login success error", error)

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
            success : false,
            message : "Login failed !"
        })
    } catch (error) {
        res.status(401).json({
            success : false,
            message : error
        })
        // console.log("google login faild 2", error )
    }
})


authRoute.get('/logout', (req, res) => {
    // Clear session data or cookies as needed
    req.logout();  // If using passport.js
    res.clearCookie('jwt'); // If using cookies

    // Revoke Google access token
    if (req.user && req.user.google && req.user.google.access_token) {
        const google = require('googleapis').google;
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({
            access_token: req.user.google.access_token
        });

        oauth2Client.revokeToken(req.user.google.access_token, (err, response) => {
            if (err) {
                res.status(401).json({
                    success : false,
                    message : err
                })
                console.error('Error revoking Google access token:', err);
            }
            
            res.status(200).json({
                success : true,
                message : "logout successful"
            })
            console.log('Google access token revoked.');
        });
    }

    // Redirect to a logged-out page or back to the login page
    res.redirect('/');
});



    module.exports = authRoute
