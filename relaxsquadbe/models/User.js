const mongoose = require("mongoose")

const User = mongoose.model('User', {
    username: {
        type:String,
        trim: true
    },
    email: {
        type:String,
        trim: true
    },
    phone: {
        type:String,
        trim: true
    },
    location: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Location'
    },//**
    joindate: {
        type: Date,
        default: Date.now()
    },
    password: {
        type:String
    }
})

module.exports = User