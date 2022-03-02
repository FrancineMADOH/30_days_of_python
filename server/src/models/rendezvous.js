const mongoose = require('mongoose')
const validator = require('validator')

const RendezVous =  new mongoose.model('RendezVous',{
    date:{
        type: Date,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    id:{
        String,
        required:true
    },
    duration:{
        type: Number,
        required:true
    },
    userid:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

module.exports = RendezVous