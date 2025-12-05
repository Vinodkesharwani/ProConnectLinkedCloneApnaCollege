import express from'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();


 const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use(express.json());
app.use(postRoutes)
app.use(userRoutes)
app.use(express.static("uploads"))

const start = async ()=>{
const connectDb = await mongoose.connect("mongodb+srv://VinodGuru95:DaminiShukla95@linkedin.0ia1y9h.mongodb.net/?retryWrites=true&w=majority&appName=linkedin")

app.listen(9080, ()=>{
    console.log("Server is running on port 9080");


})}
start();
