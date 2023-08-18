const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");


const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true, "Name field can't be empty"],
        minlength :[3, "Name should have atleast 3 charactors !"]
    },
    number:{
        type : Number,
        default : null
    },
    email:{
        type : String,
        required : [true, "Email field can't be empty"],
        unique : true
    },
    age:{
        type : String,
        default : null
    },
    gender:{
        type : String,
        default : null
    },
    password : {
        type : String,
        required : [true,"Please fill the pass word field !"],
        minlength :[8, "Password should have atleast 8 charactors !"]
    },
    address:{
        type : String,
        default : null
    },
    tnc:{
        type : String,
        required : [true, "Please agree term and condition to signup !"]
    },
    image : {
        public_id : {
            type : String, 
            default : null
        },
        url : {
            type : String,
             default : 'https://res.cloudinary.com/protapbairagi/image/upload/v1676965945/defaultImage.png'
        }
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    role : {
        type : String,
        default : "user"
    }
});

// hash password
userSchema.pre("save", async function(next){
    if( !this.isModified("password")){
        return next();
    }
     this.password = await bcrypt.hash(this.password, 10)
});

// generate token for cookie
userSchema.methods.generateToken = async function(){
    let token = jsonwebtoken.sign({id:this._id}, "8758dg 28xr2gex8+23g8qy2zze9 e9gI&E&4w^?&o8/7fo86d7i=5di&8o:PP)O<JBCZEASA@Q#!IU(*HUv", {expiresIn : "1d"});
    return token
};

// compare password
userSchema.methods.comparePassword = async function(oldPassword){
    let isPasswordMatch = await bcrypt.compare(oldPassword, this.password);

    return isPasswordMatch
}

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;