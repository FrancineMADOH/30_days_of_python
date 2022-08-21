const mongoose = require('mongoose')

const Appointments =  mongoose.model('Appointment', {
    rcode: {
        type:String
    },
    rdate:{
        type: Date
    },
    rtype:{
        type: Number
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'State'
    },
    Location:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Location'
    },
    isReview:{
        type: Number,
        default:0
    },
    beautifyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Beautifyer'
    },
    adminID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    },
    pcode: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Prestation'
    }
})