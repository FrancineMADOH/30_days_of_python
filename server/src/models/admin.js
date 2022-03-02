const mongoose = require('mongoose')
const validator = require('validator')

const Admin =  new mongoose.model('Admin',{
    adname:{
        type:String,
        required:true,
        trim:true
    },
    id:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        loweCase:true,
        required:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error('Please provide a valid password')
            }
        }
    }
})

module.exports = Admin