import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to MongoDB: " + connect.connection.name);
        

    }catch(err){
        console.log(err);
        process.exit(1);  
    }
};