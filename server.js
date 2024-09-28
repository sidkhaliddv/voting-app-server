import express from "express";
import { connectDB } from './db.js';
import 'dotenv/config'

const app = express();

app.listen(3000, ()=>{
  console.log(`Application running on ${3000}`)
});

connectDB();
