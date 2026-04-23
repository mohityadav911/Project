import mongoose from "mongoose";
import { dbname } from "../constants.js";

const connectdb = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
        console.log(`\n mongodb connected ${connection.connection.host}`)
    } catch (error) {
        console.log("mongodb error", error)
        process.exit(1)
    }
}

export default connectdb