const passport = require("passport");
const userModel = require("../models/users");
const GoogleStrategy = require("passport-google-oauth20").Strategy



passport.use( new GoogleStrategy({
    clientID : "418059318534-dpve61uhokog17294r6ee85u5opmdk0k.apps.googleusercontent.com",
    clientSecret : "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",
    // callbackURL : `/auth/google/callback`,
    callbackURL : `http://localhost:5544/auth/google/callback`,
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
            url : ""
        }

        let result = await cloudinary.uploader.upload(profile.photos[0].value, {
            folder: "website_ecommerce"
        });

        image.public_id = result.public_id;
        image.url = result.url;

        user = await userModel.create({
          name : profile.displayName,
          email : profile.emails[0].value,
          image : image
        })
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