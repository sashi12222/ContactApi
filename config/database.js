import mongoose  from "mongoose";

const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(err){
       console.log(err.message);
       process.exit(1);
    }
}

export default connectDB;