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

const app = express(http);
const PORT = process.env.PORT || 5544;

require("dotenv").config({path : "server/config/.env"})

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(express.json({ extended: true, limit: "25mb" }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.use(cors({
    credentials : true,
    // origin : "http://localhost:3000"
    origin : [ "http://localhost:3000/", "http://localhost:5544/", "https://shopnow-green.vercel.app/"]
}));



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