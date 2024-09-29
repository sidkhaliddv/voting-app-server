import express from "express";
import { connectDB } from './db.js';
import userRouter from "./src/users/routes.js";
import bodyParser from "body-parser";
import 'dotenv/config'

const app = express();

app.listen(3000, ()=>{
  console.log(`Application running on ${3000}`)
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRouter)

connectDB();
