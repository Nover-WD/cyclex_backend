import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        countInStock: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cart = mongoose.model("CartItem", cartSchema);
export default Cart;

