const passport = require("passport");
const userModel = require("../models/users");
const cloudinary = require("../config/cloudinaryConfig");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const clientUrl = "https://shopnow-green.vercel.app"



passport.use( new GoogleStrategy({
    clientID : "418059318534-dpve61uhokog17294r6ee85u5opmdk0k.apps.googleusercontent.com",
    clientSecret : "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",
    // callbackURL : `http://localhost:5544/auth/google/callback`,
    callbackURL : `${clientUrl}/website_ecommerce/app/api/google/callback`,
    scope : [ "profile", "email"],
    passReqToCallback   : true
  },
  async(request, accessToken, refreshToken, profile, done)=>{
   
    try {
      let user = await userModel.findOne({email : profile.emails[0].value})
      
      if(user){
        
      return done(null, user);
      }
      else{

        let image = {
            public_id : "",
            url : profile.photos[0].value
        }

        // let result = await cloudinary.uploader.upload(profile.photos[0].value, {
        //     folder: "website_ecommerce"
        // });

        // image.public_id = result.public_id;
        // image.url = result.url;

        
        user = await userModel.create({
          name : profile.displayName,
          email : profile.emails[0].value,
          image : image
        })

        // Generate and set the JWT token as a cookie
        let token = await user.generateToken();
        let cookieOptions = {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
        };

        request.res.cookie("jwt", token, cookieOptions);

      return done(null, user);
      }
    } catch (error) {
      done(error)
    }
  }))

  passport.serializeUser((user, done)=>{
    done(null, user.email)
  });
  
  passport.deserializeUser(async(email, done)=>{
    const user = await userModel.findOne({email:email})
    done(null, user)
  })
  

  module.exports = passport