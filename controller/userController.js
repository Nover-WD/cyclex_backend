import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import nodemailer from "nodemailer";
import users from "../data/users.js";

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //finds one document from db
    const user = await User.findOne({email});
    

    if(user && ( await user.matchPassword(password))){
        //Update login time
        await User.updateOne({email}, {lastLogin: new Date()});

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id)
        });
    } else {
        res.status(401);
        throw new Error("Incorrect Email and/or Password");
    }
});

const registerUser = asyncHandler( async(req, res) => {
    const { name, email, password, confirmPassword} = req.body;

    const isUserExisting = await User.findOne({email});

    if(!isUserExisting){
        const user = await User.create({
            name,
            email,
            password
        });

        if(user){
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                lastLogin: user.lastLogin,
                token: generateToken(user.id)
            });
        } 
        
    } else {
        res.status(400);
        if( name == null || name == ""){
            throw new Error("Name is required");
        } else if (password == null || password == ""){
            throw new Error("Password is required");
        } else if (password.length < 6 ){
            throw new Error("Password is minimum of 6 characters");
        } else if (password != confirmPassword){
            throw new Error("Password do not match");
        }else {
            throw new Error("User already exists");
        }
    };
});

const getUserProfile = asyncHandler(async (req, res) => {
     //get the user info in from token decoded by authMiddleware.js
    const user = await User.findById(req.user.id);

    if(user){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error("User not found");
    }
});

const updateUserProfile = asyncHandler(async(req, res) => {
    //get the user info in from token decoded by authMiddleware.js
    const user = await User.findById(req.user.id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password;
        }

        const updated = await user.save();

        res.json({
            _id: updated.id,
            name: updated.name,
            email: updated.email,
            isAdmin: updated.isAdmin,
            token: generateToken(updated.id)
        });
    } else {
        res.status(401);
        throw new Error("User not Found");
    }
});

const deleteUserProfile = asyncHandler(async(req, res) => {
    //get the user info in from token decoded by authMiddleware.js
    const user = await User.findById(req.user.id);

    if(user){
        await user.remove();
        res.json({
            message: "User removed"
        })
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});


//this is use also on admin panel
const userForgotPassword = asyncHandler(async(req, res) => {
    const { email } = req.body;

    const user = await User.findOne({email: email});

    if(user){
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: "douglas.vandervort70@ethereal.email",
                pass: "pcsp4qW2fysaz92fhQ"
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"cycleX" <cyclex@example.com>', // sender address
            to: `${user.email}`, // list of receivers
            subject: "Password Reset", // Subject line
            text: `Name: ${user.name}, Email: ${user.email}, Password Reset Link:`, // plain text body
        });

        console.log("Message sent: ", info.messageId);
        console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));

        res.send("Email Sent!");
    } else {
        res.status(401);
        throw Error("Email is not registered");
    };
});

//ADMIN PANEL
const getAllUsers = asyncHandler(async(req, res) => {
    const user = await User.find();
    res.json(user);
});

const deleteUser = asyncHandler(async(req, res) => {
    const { userId } = req.body;

    const user = await User.remove({_id: userId});

    if(user){
        res.status(201).json("Successfully Remove the User");
    }
});

const updateUser = asyncHandler(async(req, res) => {
    const { userId, name, email, password, isAdmin } = req.body;

    const user = await User.findById({_id: userId});

    if(user){
        user.name = name;
        user.email = email;

        if(password){
            user.password = password;
        }

        user.isAdmin = isAdmin;


        await user.save();

        res.status(201).json("User updated");
    } else {
        res.status(404);
        throw Error("User can't be found");
    }
});

const addNewUser = asyncHandler(async(req, res) => {
    const { name, email, password, isAdmin} = req.body;

    const isUserExisting = await User.findOne({email});

    if(!isUserExisting){
        await User.create({
            name,
            email,
            password,
            isAdmin
        });

        res.status(201).json("User added");
    } else {
        res.status(400);
        throw new Error("User already exist");
    }
});


export { authUser, registerUser, getUserProfile, updateUserProfile, deleteUserProfile, 
    userForgotPassword, getAllUsers, deleteUser, updateUser, addNewUser};

