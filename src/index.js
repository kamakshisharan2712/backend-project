// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Forces Node to resolve addresses via Google DNS

import  dotenv  from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()


// import express from "express"
// const app=express()

// ( async () => {
//     try {
// await mongoose.connect(`${process.env.MONGODB_URI}/ 
//     ${DB_NAME}`)
//     app.on("error", (error) =>
//     {
//         console.log("Error:",error);
//         throw error
//     })

//     app.listen(process.env.port,() =>
//     {
//         console.log(`App is listening on port $
//             {process.env.PORT}`);
//     })
//     } catch (error){
//         console.error("ERROR: ",error)
//         throw 
//     }
// }) ()