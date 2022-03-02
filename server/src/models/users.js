const mongoose = require('mongoose')
const validator = require('validator')

const Users = new mongoose.model('User', {
    email:{
        type:String,
        required:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error('Please provide a valid email')
            }
        }
    }, 
    password:{
        type:String,
        minlength:8,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    nbrerdv:{
        type:Number,
        required:true,
        default:0,
    },
    localisation:{
        required:false,
        type: Map
    }
})


module.exports = Users