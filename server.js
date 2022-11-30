import express  from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//routes
import itemRoutes from "./routes/v1/itemRoutes.js";
import orderRoutes from "./routes/v1/orderRoutes.js";
import userRoutes from "./routes/v1/userRoutes.js";
import cartRoutes from "./routes/v1/cartRoutes.js";

//middlewares
import { notFound, serverError } from "./middleware/errorMiddleware.js";

// to use variables on .env file
dotenv.config();

//connect DB
connectDB();

const app = express();
const port = process.env.PORT || 8000;

//middleware in app
//parse json format that goes here to object
app.use(express.json());

/*Heroku Production*/
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('client/build', 'index.html'));
      });
}

// Server Home
// app.get("/", (req, res) => {
//     app.use(express.static('client/build'))
//     // res.send("Authorized");
// });


// // Fetch Items
// app.use("/api/v1/items/", itemRoutes);

// app.use("/api/v1/orders/", orderRoutes);

// app.use("/api/v1/users/", userRoutes);

// app.use("/api/v1/cart/", cartRoutes)


// //Error Handlers
// app.use(notFound);
// app.use(serverError);

// // Fetch Orders
// app.get("/api/v1/orders", (req, res) => {
//     res.json(orders)
// });

// app.get("/api/v1/orders/:userId", (req, res) => {
//     const order = orders.find((order) => {
//         return order.user === Number(req.params.userId);
//     });
//     res.json(order);
// })

app.listen(port, console.log(`Server is running on ${port}`));

