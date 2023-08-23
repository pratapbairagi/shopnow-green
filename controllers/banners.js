const cloudinary = require("../config/cloudinaryConfig")


exports.createBanner = async (req, res, next) => {
    try {
        const imagesData = req.body
        console.log(imagesData)
        let bannerDetails = []

        if( typeof imagesData === "string" && imagesData.length > 0 ){
            for(let x = 0; x < imagesData.length; x++){
                let result = await cloudinary.uploader.upload(imagesData[x].url, {
                    folder : "banners"
                });

                bannerDetails.push({
                    public_id : result.public_id,
                    url : result.secure_url,
                    description : imagesData[x].description,
                    redirectPath : imagesData[x].redirectPath,
                    category : imagesData[x].category,
                });

            }
        }

    } catch (error) {
        
    }
}