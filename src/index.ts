const bodyParser=require('body-parser');
const express =require('express');
const {PORT}=require('./config/server.config');
const app=express();
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
});
