const mongoose = require('mongoose')
const validator = require('validator')

const Avis =  new mongoose.model('Avis',{
    rdvid:{
        type:String,
        required:true
    },
    note:{
        type:Number,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    beautifyerid:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default: Date.now().toLocaleString(),
        required:true
    }
})
module.exports = Avis