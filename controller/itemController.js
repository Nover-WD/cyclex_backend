import asyncHandler from "express-async-handler";
import item from "../models/itemModel.js";
    
//get the items
const getItem = asyncHandler( async(req, res) => {
    const items = await item.find({});
    res.json(items);
});

//get specific item
const getItemId = asyncHandler( async(req, res) => {
    const ITEM = await item.findById(req.params.id);

    //valid or not
    if(ITEM){
        res.json(ITEM);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});


export { getItem, getItemId };

