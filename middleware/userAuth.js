const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/users");

const userAuth = async (req, res, next) => {

    try {
        const {jwt} = req.cookies;


        if(jwt === undefined || jwt.null){
            throw new Error("Invalid authentication token !");
        }

        const {id} = jsonwebtoken.verify(jwt, "8758dg 28xr2gex8+23g8qy2zze9 e9gI&E&4w^?&o8/7fo86d7i=5di&8o:PP)O<JBCZEASA@Q#!IU(*HUv" );

        const user = await userModel.findById({_id : id});

        if( !user ){
            throw new Error("Login required !")
        }

        req.user = user;

        next();
        
    } catch (error) {
        
    }
}

module.exports = userAuth;