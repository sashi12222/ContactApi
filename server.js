import express from 'express';
import dotenv from 'dotenv';
import contactRoute from './routes/contactRoute.js';
import errorHandler from './middlelwares/errorHandler.js';
import connectDB from './config/database.js';
const app=express();
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json())
app.use('/api/contact',contactRoute);
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})