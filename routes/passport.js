const passport = require("passport");
const userModel = require("../models/users");
const cloudinary = require("../config/cloudinaryConfig");
const { response } = require("./authRoute");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const clientUrl = "https://shopnow-green.vercel.app"



passport.use(new GoogleStrategy({
  clientID: "418059318534-dpve61uhokog17294r6ee85u5opmdk0k.apps.googleusercontent.com",
  clientSecret: "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",
  // callbackURL : `http://localhost:5544/auth/google/callback`,
  callbackURL: `${clientUrl}/auth/google/callback`,
  scope: ["profile", "email"],
  passReqToCallback: true
},
  async (request, accessToken, refreshToken, profile, done) => {

    try {
      let user = await userModel.findOne({ email: profile.emails[0].value })

      if (user) {
        // Generate JWT token
        // let cookieOptions = {
        //   httpOnly: true,
        //   maxAge: (24 * 60 * 60 * 1000)
        // };

        // Store JWT token in the session
        let token = await user.generateToken();

        // request.session.jwt = token;

        return done(null, user, token);
      }
      else {

        let image = {
          public_id: "",
          url: profile.photos[0].value
        }


        user = await userModel.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          image: image
        })

        // Generate and set the JWT token as a cookie
        let token = await user.generateToken();
      
        return done(null, user, token);
      }
    } catch (error) {
      done(error)
    }
  }))

passport.serializeUser((user, done) => {
  done(null, user.email)
});

passport.deserializeUser(async (email, done) => {
  const user = await userModel.findOne({ email: email })
  done(null, user)
})


module.exports = passport