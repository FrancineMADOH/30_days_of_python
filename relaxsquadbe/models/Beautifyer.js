const mongoose = require('mongoose')

const Beautifyer = mongoose.model('Beautifyer', {
    bname: {
        type: String
    },
    bphone: {
        type: String
    },
 
    blocation: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Location'
    },
    recruitdate: {
        type: Date,
        default: Date.now()
    },
    contratID: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Contrat'
    },
    bemail: {
        type: String
    },
    badminID: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    },//**
    bbeautifNote: {
        type:Number
    },//**
    bavatar: {
        data: Buffer,
        contentType: String
    }
})

module.exprts = Beautifyer