import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path : './env'
})

connectdb()


















// import express from "express"
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
//         app.on('error', (error) => {
//             console.log("Error:", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR :", error)
//         throw error
//     }
// })()