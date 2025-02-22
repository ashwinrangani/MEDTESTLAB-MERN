import express from 'express';
import router from './Routes/routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database connected'))
.catch((error)=>console.error(error))
app.use(cors({
  origin: 'https://lab-care.vercel.app', 
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/', router);



app.listen(PORT, ()=> {
  console.log(`Application running on ${PORT}`)
})

