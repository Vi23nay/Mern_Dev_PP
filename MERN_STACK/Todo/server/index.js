import express from 'express';
import  mongoose from 'mongoose';
import nodemon from 'nodemon';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}));
app.use(cors());



