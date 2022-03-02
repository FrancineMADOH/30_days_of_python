const mongoose = require('mongoose')
const validator = require('validator')

const Service =  new mongoose.model('Service',{
    servname:{
        type:String,
        required:true
    },
    price:{
        type:int,
        required:true
    },
    illustration:{
        type:Buffer,
        required:true
    },
    exec_time:{
        type:Number,
        required:true
    },
    details:{
        type :String
    }, 
    id:{
        type:String,
        required:true
    }
})

module.exports = Service