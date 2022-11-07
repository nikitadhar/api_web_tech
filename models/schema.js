const express=require("express");
const mongoose = require("mongoose");
const productSchema=mongoose.Schema({
Product_id:String,
Product_type:String,
Product_name :String,
Product_price :Number,
Available_quantity:Number
})
 
const productModel=mongoose.model("product",productSchema)
const customerSchema=mongoose.Schema({
    customer_id:String,
    customer_name :String,
    email :String,
    balance:Number
    })  
const customerModel=mongoose.model("customer",customerSchema)
const orderSchema=mongoose.Schema({
    customer_id:String,
    Product_type:String,
    inventory_id :String,
    item_name :String,
    quantity:Number
    })
const orderModel=mongoose.model("order",orderSchema)
module.exports={productModel,customerModel,orderModel}