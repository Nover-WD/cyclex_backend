import express from "express";
import { addToCart, getUserCartItems, removeItemUserCart } from "../../controller/cartController.js";

const ROUTER = express.Router();

ROUTER.post("/", addToCart);

ROUTER.route("/user-cart-items/:id").get(getUserCartItems);

ROUTER.route("/remove").delete(removeItemUserCart);

export default ROUTER;