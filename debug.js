import connectDB from "./config/db.js";
import orders from "./data/orders.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

for(let x in orders){
    console.log(orders[x].user);
}