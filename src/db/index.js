import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try {
        const contInst=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDb Connected ${contInst.connection.host}`);
        
    } catch (error) {
        console.log("mongo db connection error",error);
        process.exit(1)
    }
}

export default connectDB