const { json } = require("express");
const express=require("express");
const app=express();
const {productModel,customerModel,orderModel}=require("../models/schema")


app.get('/product', function(req, res) {
    res.render('partials/product');
  });
  app.get('/customerTable', function(req, res) {
    res.render('partials/customer');
  });
  app.get('/order', function(req, res) {
    res.render('partials/order');
  });
app.get('/inventory',(req,res)=>{
    productModel.find().then((data)=>{
        res.status(200).send(data)
    })
})
app.get("/inventory/electronics",(req,res)=>{
    productModel.find().then((data)=>{
        let arr2=[]
        data.forEach((ele)=>{
            if(ele.Product_type=="electronics"){
                arr2.push(ele.ItemName)
            }})
        res.send(arr2);})})
app.get("/inventory/furniture",(req,res)=>{
    productModel.find().then((data)=>{
        let arr2=[]
        data.forEach((ele)=>{
            if(ele.Product_type=="electronics"){
                arr2.push(ele.ItemName)
            }})
        res.send(arr2);})})

        app.get("/customer",(req,res)=>{
            let arr=[];
            customerModel.find().then((data)=>{
              data.forEach((ele)=>{
                arr.push(ele.balance)
              })
              res.send(arr);  
            })

        })


module.exports=app
  