import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import postRoutes from './routes/posts.js'; 

const app = express();


app.use('/posts' , postRoutes)
app.use(bodyParser.json({ limit:"500mb" , extended : true }));
app.use(bodyParser.urlencoded({ limit:"500mb" , extended : true }));
app.use(cors());


const PORT = process.env.PORT || 5000

app.listen(PORT)