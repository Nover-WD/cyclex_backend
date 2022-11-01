import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import Order from "../../models/orderModel.js";

const ROUTER = express.Router();

//Get all Orders from db
ROUTER.get(
    "/",
    asyncHandler(async(req, res) => {
        const ORDERS = await Order.find({}); //Get the orders
        res.json(ORDERS); //response it to json format
    })
);

//Get specific order here using user 
ROUTER.get(
    "/:id", 
    asyncHandler(async(req, res) => {
        //req.params.id the paramater will be type in path of search bar
        const UserId =  await Order.findById(req.params.id);

        if(UserId){
            res.json(UserId);
        } else {
            res.status(404);
            throw new Error("Order not found");
        }
    })
);

export default ROUTER;
