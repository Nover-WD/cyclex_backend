
import connectDB from "./config/db.js";
//seeds
import users from "./data/users.js";
import items from "./data/items.js";
import orders2 from "./data/orders2.js";
//models
import User from "./models/userModel.js";
import Item from "./models/itemModel.js";
import Order from "./models/orderModel.js";

connectDB();

const dataSeeder = async() => {
    try {
        //clear DB before import
        await User.deleteMany();
        await Item.deleteMany();
        await Order.deleteMany();

        //import user
        const USERS = await User.insertMany(users);

        //import item
        const ADMIN = USERS[0]._id; //creator of Items List Seed
        const ADDITEMS = items.map((item) => {
            return {
                ...item, //spread operator to get the items info
                user: ADMIN
            };
        });
        const ITEMS = await Item.insertMany(ADDITEMS);

        // import order
        const ADDORDERS = orders2.map((order) => {
            return {
                ...order,
                user: USERS.find((user) => {
                    return user.email == order.paymentResult.emailAddress; //fetch the userId
                }),
                ...order.orderItems.item = ITEMS.find((item) => {
                    return item.name == order.orderItems.name; //fetch item id
                })
            }
        })
        await Order.insertMany(ADDORDERS);

        console.log("Database Seeded");
        process.exit(0); //close the process as successful
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); //close with failures
    }
}

const dataCleaner = async() => {
    try {
        //clear DB before import
        await User.deleteMany();
        await Item.deleteMany();
        await Order.deleteMany();

        console.log("Database Cleaned");
        process.exit(0);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

if(process.argv[2] == "-d"){ //if the argument variable = 2 or the pass argument = "-d"
    dataCleaner();
} else {
    dataSeeder();
}
