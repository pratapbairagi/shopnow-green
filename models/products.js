const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required !"]
    },
    category: {
        type: String,
        required: [true, "Product category is required !"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    price: {
        type: Number,
        required: [true, "Product price is required !"]
    },
    brand: {
        type: String,
        required: [true, "Brand name is required !"]
    },
    color: [
        {
            value: {
                type: String,
                required: [true, "color is required"]
            },
            value_type: {
                type: String,
                required: [true, "color is required"]
            },
            id: {
                type: String,
                required: [true, "color is required"]
            },
        }
    ],
    size: [
        {
            value: {
                type: String
            },
            value_type: {
                type: String
            },
            id: {
                type: String
            },
        }
    ],
    gender: {
        type: String,
        required: [true, "Select option !"]
    },
    offer: {
        available: {
            type: Boolean,
            default: false
        },
        percentage: {
            type: Number,
            default: 0
        }
    },
    reviews: [
        {
            comment: {
                type: String
            },
            rating: {
                type: Number,
                default: 0
            },
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "user"
            },
            name: {
                type: String
            },
            userImage: {
                type: String
            },
            time: {
                type: Date,
                default: Date()
            }
        }
    ],
    numberOfReviews: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    seller: {
        name: {
            type: String
        },
        id: {
            type: String
        }
    },
    stock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    }

});

const Product = mongoose.model("product", productSchema);

module.exports = Product;