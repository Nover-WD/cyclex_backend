import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { getItem, getItemId } from "../../controller/itemController.js";
import Item from "../../models/itemModel.js";

const ROUTER = express.Router();

//Get the list of all items
ROUTER.get("/", getItem);

//Get items by its Id
ROUTER.get("/:id", getItemId);

export default ROUTER;