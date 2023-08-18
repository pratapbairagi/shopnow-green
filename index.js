const express = require("express");
const http = require("http");
const { mongoDBConnection } = require("./connection/databaseConnection");
const userRouter = require("./routes/user");
const productRoute = require("./routes/product")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./middleware/globalMiddlewareHandler.js")
const bodyparser = require("body-parser")
const path = require("path");
const passport = require("passport");
const userModel = require("./models/users");
// const GoogleStrategy = require("passport-google-oauth20").Strategy
const authRoute = require("./routes/authRoute");
const session = require("express-session");
require("./routes/passport")


const app = express(http);
const PORT = process.env.PORT || 5544;

require("dotenv").config({path : "server/config/.env"})

app.use(cors({
  credentials : true,
  origin : [ "http://localhost:3000", "http://localhost:5544", "https://shopnow-green.vercel.app"],
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(session({
  secret : "8758dg 28xr2gex8+23g8qy2zze9 e9gI&E&4w^?&o8/7fo86d7i=5di&8o:PP)O<JBCZEASA@Q#!IU(*HUv",
  resave : true,
  saveUninitialized : true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(express.json({ extended: true, limit: "25mb" }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))


app.use("/", authRoute)
app.use("/website_ecommerce/app/api", userRouter); 
app.use("/website_ecommerce/app/api", productRoute);

  app.use(express.static(path.join(__dirname, './client/build/')));

  app.get('*', (req, res) =>{
   return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });

app.use(globalErrorHandler)

mongoDBConnection("mongodb+srv://website_ecommerce:18May1994@cluster0.5qgqh.mongodb.net/website_ecommerce?retryWrites=true&w=majority")

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})