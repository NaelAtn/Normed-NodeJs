const mongoose = require("mongoose") ;

// create schema 
const {Schema , model } = mongoose ;

const ProductSchema = new Schema({
    
    name : {
        type: String,     
    },
    
    description : {
        type: String,
    },

    reference : {
        type: String,
    }, 

    ref : {
        type: String,
    }, 

   imageURL : {
       type : String 
    },
    


}, { timestamps: true })


module.exports = Product = model('product', ProductSchema)