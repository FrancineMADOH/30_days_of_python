const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
    note:{
        type: Number
    },
    comments: {
        type: String
    },
    rdate:{
        type: Date,
        default: Date.now()
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rdvId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Appointment'
    },
    beautifyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Beautifyer'
    }
    
})

module.exports = Review