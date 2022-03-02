const mongoose = require('mongoose')
const validator = require('validator')

const Beautifyer = new mongoose.model('Beautifyer',{
    bname:{
        type:String,
        required:true
    },
    photo:{
        type:buffer,
        required:true
    },
    specialite:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    regis_number:{
        type :Number,
        required:true
    },
    note:{
        type: Number,
        required:true
    }
})

module.exports = Beautifyer