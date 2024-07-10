import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log(`Success fully connect to mongoDB`);
        
    } catch (error: any) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB