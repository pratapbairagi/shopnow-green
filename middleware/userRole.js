
const ErrorHandler = require("../utils/errorHandler")

module.exports = (role) => {

    return (req, res, next) => {

        if( role !== req.user.role ){

            return new ErrorHandler(`Role : ${req.user.role} is not allowed to access this facility !`, 400)
        }

        return next()
    }
}