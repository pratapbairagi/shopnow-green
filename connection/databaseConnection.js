const mongoose = require("mongoose");


exports.mongoDBConnection = async (url) => {
    try {
        mongoose.set({strictQuery : true});
        mongoose.connect(url, {useUnifiedTopology : true, useNewUrlParser : true}).then(res=>{
            console.log("mongodb connected");
        }).catch(er=>{
            throw new Error(er);
        })
    } catch (error) {
        throw new Error(error);
    }
}

// export default mongoDBConnection