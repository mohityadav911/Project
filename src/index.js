import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path : './env'
})

connectdb()
.then(() => {
    app.on('error', (error) => {
        console.log("error", error)
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("mongodb connection failed", error)
})

















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