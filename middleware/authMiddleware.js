import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

const authorize = asyncHandler( async(req, res, next) => {
    let token;

    //check if user has authorization, you can check the authorization in postman
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //split the string into substring and get the second substring to get the jwt token
            token = req.headers.authorization.split(" ")[1];
            //get the user id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //get user info except for the password
            req.user = await User.findById(decoded.id).select("-password");

            next();
        }
        catch (err) {
            res.status(401);
            throw new Error("Not Authorize");
        }
    };

    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export { authorize }