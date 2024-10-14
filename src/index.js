import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:'../.env'
})


connectDB()














/*
import express from "express";

const app = express()

//connetcing to data base
;(async()=>{
    try {
        await mongoose.connect(` ${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("not able to talk :",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening to to port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
        
    }
})()
*/