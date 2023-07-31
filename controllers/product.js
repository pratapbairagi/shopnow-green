const ErrorHandler = require("../utils/errorHandler");
const Products = require("../models/products");
const cloudinary = require("../config/cloudinaryConfig")

// guest and suers : get all products
exports.get_products = async (req, res, next) => {
    try {
        const query = {
            title : {
                $regex : req.query.title,
                $options : "i"
            }
            ,
            category : {
                $regex :req.query.category
            }
            ,
            price : {
                $gte : req.query.price.gte,
                $lte : req.query.price.lte
            }
            ,
            gender : {
                $regex :req.query.gender
            }
            , 
            brand : {
                $regex : req.query.brand,
                $options : "i"
            }
            ,
            color : {
                $regex : req.query.color,
                $options : "i"
            }
            ,
            size : {
                $regex : req.query.size,
                $options : "i"
            }
        };

        // const sort = req.query.sort ? {
        //     "price" : req.query.sort
        // } : {}

        // const products = await Products.find(query);
        const products = await Products.find(query);

        res.status(200).json({
            success : true,
            message : "Your products are here !",
            products
        })
    } catch (error) {
        return next( new ErrorHandler(error) )
    }
};

// guest or user : get product
exports.get_product = async (req, res, next) => {
    try {
        const isProductExist = await Products.findById({_id : req.params.id});

        if( !isProductExist ){
            return next( new ErrorHandler("Product not found !", 404));
        }

        res.status(200).json({
            success : true,
            message : "your product is here !",
            product : isProductExist
        })
    } catch (error) {
        return next( new ErrorHandler(error))
    }
};

// admin and seller : create product
exports.create_product = async ( req, res, next ) => {
    try {
        let {title, category, description, images, price, stock, offer, color, size, brand, gender} = req.body;
        let seller = {};
        let image_url = [];
        let colorFiltered = []
        let sizeFiltered = []

        colorFiltered = await color.length > 0 ? color.filter(v=> v.id !== 1) : []
        sizeFiltered = await size.length > 0 ? size.filter(v=> v.id !== 1) : []

        const isProductExisitWithSameName = await Products.findOne({title : title});

        if(isProductExisitWithSameName){
            return next( new ErrorHandler("Product aleady exist with this name !", 400))
        }

        if( !title || !category || !description || !price || !stock || images.length <= 0 ){
             return next( new ErrorHandler("All fields are required !", 400))
        }

        seller = {
            name : req.user.name,
            id : req.user._id
        };

        for( let x = 0; images.length > x; x++){
            let result = await cloudinary.uploader.upload(images[x].url, {
                folder : "website_ecommerce_products"
            });

            image_url.push({
                public_id : result.public_id,
                url : result.secure_url
            });
        };

        console.log("check", req.body)

        const product = await Products.create({
            title,
            category, 
            description,
            price,
            stock,
            images : image_url,
            seller,
            offer,
            gender,
             brand,
             color : colorFiltered,
             size : sizeFiltered
        });

        res.status(201).json({
            success : true,
            message : "Product created successfully !",
            product
        })


    } catch (error) {
        return next( new ErrorHandler(error))
    }
};

// edit product 
exports.edit_product = async (req, res, next) => {
    const id = req.params.id
    const {title, category, description, price, stock,offer, oldImage, newImage} = req.body;
    try {
        let images = [];
        const productExist = await Products.findById({_id:req.params.id});

        // console.log("update1", title, category, description, price, stock,offer, oldImage, newImage )
        // console.log("pro", productExist)

        if(!productExist){
            console.log("update2", productExist)

            return next( new ErrorHandler("Product not found !", 404));
        }
        else{
            console.log("update3", newImage[0])

            if(newImage[0] != null && newImage != undefined ){
            console.log("update4")
            

                // for(let i = 0; productExist.images.length > i; i++){
                //     await cloudinary.uploader.destroy(productExist.images[i].public_id);
                // }
                // console.log("update5")

                for(let i = 0; newImage.length > i; i++){
                    // console.log("update6",req.body.images)
                    let result = await cloudinary.uploader.upload(newImage[i].url, {
                        folder : "website_ecommerce_products"
                    });

                    images = await productExist.images;

                    images.push({
                        public_id : result.public_id,
                        url : result.secure_url
                    });


                }

            }
            else{
                images = productExist.images
            }

           const product = await Products.findByIdAndUpdate({_id:id},{
                title : title,
                category : category,
                description : description,
                price : price,
                offer : { available : false, percentage : req.body.percentage },
                images : images,
                stock : req.body.stock
            });

            res.status(200).json({
                success : true,
                message : "Product Updated successfully !",
                product
            })

        }
        
    } catch (error) {
        return next( new ErrorHandler(error))
    }
}

//  delete product
exports.delete_product = async (req, res, next) => {
    const id = req.params.id
    try {
        const isProductExist = await Products.findById(id);

        if(!isProductExist){
            return next( new ErrorHandler("Product not found !", 404))
        }
        else{
            await Products.findByIdAndDelete({_id : id});
            const products = await Products.find();

            res.status(200).json({
                success : true,
                message : "Product deleted successfully !",
                products
            })
        }

    } catch (error) {
        return next( new ErrorHandler(error))
    }
}