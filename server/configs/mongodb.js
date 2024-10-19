import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> {
        console.log("database connection");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/removeit`)
}

export default connectDB