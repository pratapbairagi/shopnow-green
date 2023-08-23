const mongoose = require("mongoose")

const BannersSchema = new mongoose.Schema({
   banner: [
    {
        public_id: {
            type: String
        },
        url: {
            type: String
        },
        redirectPath : {
            type : String
        },
        description : {
            type : String
        },
        category : {
            type :String
        }
    }
]
});

const Banners = new mongoose.model("banners", BannersSchema)

module.exports = Banners