import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const DBconnection = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Database connected: ${DBconnection.connection.host}` );
    } catch (error) {
        console.error(`Failed Connection: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;