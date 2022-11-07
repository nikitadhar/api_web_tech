const express =require("express");
const app=express();
const mongoose=require("mongoose");
const router=require("./router/router")
// set the view engine to ejs
app.set('view engine', 'ejs');
app.listen(3000,(err)=>{
    if(!err){
        console.log("server is connected at 3000")}
})
mongoose.connect("mongodb://localhost/api_web_tech",(err)=>{
    console.log("database connected")
})
app.use("user",router)
 