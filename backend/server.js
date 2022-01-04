const express=require('express');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');


const cookieParser=require('cookie-parser');


const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const cors=require('cors');


const Routes=require('./service/userrouter.js');
const GroceryRoutes=require("./service/groceryrouter.js");



app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true,
}))



app.use('/userapi',Routes);
app.use('/groceryapi',GroceryRoutes);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running at port no. ${PORT}`)
})