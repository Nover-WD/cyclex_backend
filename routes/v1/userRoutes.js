import express from "express";
import { authUser, deleteUser, deleteUserProfile, getAllUsers, getUserProfile, registerUser, 
    updateUserProfile, userForgotPassword, updateUser, addNewUser} from "../../controller/userController.js";

//middleware
import { authorize } from "../../middleware/authMiddleware.js";


const ROUTER = express.Router();

//USER PANEL
ROUTER.post("/login", authUser);
ROUTER.route("/").post(registerUser);
//authorize first before get the user profile
ROUTER.route("/profile").get(authorize, getUserProfile).put(authorize, updateUserProfile).delete(authorize, deleteUserProfile);
ROUTER.route("/email").post(userForgotPassword);

//ADMIN PANEL
ROUTER.route("/add-user").post(addNewUser);
ROUTER.route("/users-tool").get(getAllUsers).delete(deleteUser).put(updateUser).post(userForgotPassword);

export default ROUTER;