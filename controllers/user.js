const userModel = require("../models/users");
const cloudinary = require("../config/cloudinaryConfig");
const ErrorHandler = require("../utils/errorHandler");


exports.user_register = async (req, res, next) => {

    try {
        const { name, email, tnc, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword || !tnc) {
            return next(new ErrorHandler("All fields are required ! ", 400))
        }

        if (password !== confirmPassword) {
            return next(new ErrorHandler("Password and Confirm Password is not matching ! ", 400))

        }
        const isEmailExist = await userModel.findOne({ email });

        if (isEmailExist) {
            // throw new Error("This email is already registered !")
            return next(new ErrorHandler("This email is already registered !", 400))
        }

        const user = await userModel.create(req.body);

        let token = await user.generateToken();

        const cookieOption = {
            httpOnly: true,
            maxAge: (24 * 60 * 60 * 1000)

        };
        
        res.status(201).cookie("jwt", token, cookieOption).json({
            success: true,
            message: "User registered successfully !",
            user
        })


    } catch (error) {
        // throw new Error(error)
        return next(new ErrorHandler(error))
    }
};

// login user

exports.user_login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorHandler("Please fill both login credentials !", 400))
        }
        let isUserExist = await userModel.findOne({ email: email });

        if (!isUserExist) {
            // throw new Error("Email is not registered with this email !");
            return next(new ErrorHandler("Email is not registered !", 404))
        };

        let isPasswrodMatch = await isUserExist.comparePassword(password);

        if (!isPasswrodMatch) {
            // throw new Error("Invalid login credentials !")
            return next(new ErrorHandler("Invalid login credentials !", 404))
        }

        let token = await isUserExist.generateToken();

        let cookieOptions = {
            httpOnly: true,
            maxAge: (24 * 60 * 60 * 1000)
        };

        res.cookie("jwt", token, cookieOptions);

        res.status(200).json({
            success: true,
            message: "User login success !",
            user: isUserExist
        });

    } catch (error) {
        // throw new Error(error)
        return next(new ErrorHandler(error))
    }
};

// user logged
exports.user_logged = async (req, res, next) => {

    try {
        const user = await userModel.findById({ _id: req.user._id });

        if (!user) {
            // throw new Error("login required !");
            return next(new ErrorHandler("login required !", 400))
        }

        res.status(200).json({
            success: true,
            message: "user authentication successful",
            user
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
};

// user logout
exports.user_logout = async (req, res, next) => {

    try {
        let cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now())
        }
        res.status(200).cookie("jwt", null, cookieOptions).json({
            success: true,
            message: "logged out"
        })

    } catch (error) {
        // throw new Error(error)
        return next(new ErrorHandler(error))
    }
};

// update user
exports.user_update = async (req, res, next) => {
    const { name, email, image, age, gender, oldPassword, newPassword, number, address } = req.body;

    try {
        let isUserExist = await userModel.findOne({ email: email });

        if (!isUserExist) {
            // throw new Error("Unauthorized user !");
            return next(new ErrorHandler("Unauthorized user !", 404))
        };

        let updateImage = {
            public_id: "",
            url: ""
        };

        if (image.url !== isUserExist.image.url) {

            if (isUserExist.public_id !== null && isUserExist.public_id !== undefined && isUserExist.public_id) {
                cloudinary.uploader.destroy(isUserExist.image.public_id);
            }
            else if(isUserExist.public_id === null || isUserExist.public_id === undefined){
                cloudinary.api.delete_resources(isUserExist.image.url)
            }

            const result = await cloudinary.uploader.upload(image.url, {
                folder: "website_ecommerce"
            });

            updateImage.public_id = result.public_id;
            updateImage.url = result.url;

            isUserExist.image = updateImage;

        }
        else {
            isUserExist.image = image

        }

        if (newPassword !== null && newPassword !== undefined && newPassword.length >= 8) {

            let isPasswordMatch = await isUserExist.comparePassword(oldPassword);

            if (!isPasswordMatch) {
                // throw new Error("Old password is matching !")
                return next(new ErrorHandler("Old password is matching !", 400))
            }
            else {

                isUserExist.name = name;
                isUserExist.email = email;
                isUserExist.age = age;
                isUserExist.gender = gender;
                isUserExist.address = address;
                isUserExist.number = number;
                isUserExist.password = newPassword

            }

        }
        else {
            isUserExist.name = name;
            isUserExist.email = email;
            isUserExist.age = age;
            isUserExist.gender = gender;
            isUserExist.address = address;
            isUserExist.number = number;
        };

        const updatedUser = await isUserExist.save();

        res.status(200).json({
            success: true,
            message: "Updated successfully !",
            user: updatedUser
        });

    } catch (error) {
        // throw new Error(error)
        return next(new ErrorHandler(error))
    }
}

// get all users : admin
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.find();

        res.status(200).json({
            success: true,
            message: "Your users details are here !",
            users
        });
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

// get single user : admin
exports.get_single_user = async (req, res, next) => {
    console.log("id", req.params)
    try {
        const user = await userModel.findById({ _id: req.params.id });

        res.status(200).json({
            success: true,
            message: "Your user details are here !",
            user
        });
    } catch (error) {
        return next(new ErrorHandler(error))
    }
};

// admin update user
exports.admin_update_user = async (req, res, next) => {
    const id = req.params.id
    try {
        const isUserExist = await userModel.findById({ _id: id });

        if (!isUserExist) {
            return next(new ErrorHandler("User does not exist !", 404));
        }
        const { name, email, image, age, gender, number, address, role } = req.body;

        let updateImage = {
            public_id: "",
            url: ""
        };

        if (image.url !== isUserExist.image.url) {

            if (isUserExist.public_id !== null && isUserExist.public_id !== undefined && isUserExist.public_id) {
                cloudinary.uploader.destroy(isUserExist.image.public_id);
            }

            const result = await cloudinary.uploader.upload(image.url, {
                folder: "website_ecommerce"
            });

            updateImage.public_id = result.public_id;
            updateImage.url = result.url;

            isUserExist.image = updateImage;

        }
        else {
            isUserExist.image = image

        }

        isUserExist.name = name;
        isUserExist.email = email;
        isUserExist.age = age;
        isUserExist.gender = gender;
        isUserExist.address = address;
        isUserExist.number = number;
        isUserExist.role = role;
        console.log("6")
        
        const user = await isUserExist.save();

        res.status(200).json({
            success: true,
            message: "User updated successfully !",
            user
        })


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}