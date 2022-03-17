import express from 'express';
import  mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todosRoutes from './routes/todos.js';

const app = express();
dotenv.config();
app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use('/todos', todosRoutes);
//mongodb+srv://xyz:1234@nodetuts.xyxsh.mongodb.net/todosDatabase?retryWrites=true&w=majority

const mongodb = "mongodb+srv://xyz:1234@nodetuts.xyxsh.mongodb.net/todosDatabase?retryWrites=true&w=majority";

app.get('/',(req,res)=>{
    res.send('welcome to server');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(mongodb, {useUnifiedTopology: true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    });
})
.catch(err => console.log(err));



