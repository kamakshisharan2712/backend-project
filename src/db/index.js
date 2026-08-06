import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async () =>
{
    try {
       // Replace NEW_PASSWORD with the clean code you just copied
const connectionInstance = await mongoose.connect(`mongodb+srv://kamakshisharan2712_db_user:K1N7rTYmxnGelHFu@cluster0.tqhegmo.mongodb.net/chai_backend?retryWrites=true&w=majority`)

             console.log(`\n MongoDB connected !!
                DB HOST: $ {connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB
