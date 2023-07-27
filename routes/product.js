const express = require("express");
const { create_product, get_product, get_products, delete_product, edit_product } = require("../controllers/product");
const userAuth = require("../middleware/userAuth");
const userRole = require("../middleware/userRole");

const propductRoute = express.Router()


propductRoute.route("/products").get(get_products);
propductRoute.route("/product/:id").get(get_product).delete(delete_product).put(edit_product)
propductRoute.route("/product/add").post( userAuth, userRole("admin") ,create_product);




module.exports = propductRoute