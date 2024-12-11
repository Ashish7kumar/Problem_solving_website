import bodyParser from 'body-parser';
import express from 'express';
import {PORT} from './config/server.config';
import apiRouter from './routes/index';
const app=express();
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
});
