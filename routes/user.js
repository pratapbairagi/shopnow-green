const express = require("express");
const { user_register, user_login, user_logged, user_logout, user_update, getAllUsers, get_single_user, admin_update_user } = require("../controllers/user");
const userAuth = require("../middleware/userAuth");
const userRole = require("../middleware/userRole");
const userRouter = express();

userRouter.route("/register").post(user_register);
userRouter.route("/login").post(user_login);
userRouter.route("/logged").get( userAuth, user_logged);
userRouter.route("/logout").get(user_logout);
userRouter.route("/update").put(userAuth, user_update);

// admin
userRouter.route("/admin/users").get(userAuth, userRole("admin"), getAllUsers)
userRouter.route("/admin/user/:id").get(userAuth, userRole("admin"), get_single_user)
userRouter.route("/admin/update/user/:id").put(userAuth, userRole("admin"), admin_update_user)





module.exports = userRouter;

