import Cart from "../models/cartModel.js";
import Item from "../models/itemModel.js";
import asyncHandler from "express-async-handler";

const addToCart = asyncHandler(async(req, res) => {
    const { userId, itemId, name, brand, image, price, qty, countInStock } = req.body;

    const itemFound = await Item.findById(itemId);
    
    //if item is found in items document, update or add the item, else throw error
    if(itemFound){
        const ITEM = await Cart.findOne({user: userId, item: itemId});

        //if item found in filter update the item else add the item
        if(ITEM){
            await Cart.updateOne({user: userId, item: itemId}, {qty: qty});
            //change this to updated item
            const updatedItem = await Cart.findOne({user: userId, item: itemId});

            res.status(200).json(updatedItem);
        } else {
            const addedCartItemsToDB = await Cart.create({
                user: userId,
                item: itemId,
                name,
                brand,
                image,
                price,
                qty,
                countInStock
            });
    
            res.status(200).json(addedCartItemsToDB);
        }
    } else {
        res.status(404);
        throw new Error("Item not Found");
    };
});

const getUserCartItems = asyncHandler(async(req, res) => {
    const userId = req.params.id;

    const cartItems = await Cart.find({user: userId});

    res.json(cartItems);
});

const removeItemUserCart = asyncHandler(async(req, res) => {
    const {cartId} = req.body;

    const removedItem = await Cart.findByIdAndRemove(cartId);

    if(removedItem){
        res.status(201).json("Successfully Remove Item From Cart");
    } else {
        res.status(401);
        throw new Error("Item not removed from Cart");
    }
});

export { addToCart, getUserCartItems, removeItemUserCart };