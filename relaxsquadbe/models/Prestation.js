const mongoose = require('mongoose')

const Prestation = mongoose.model('Prestation',{
    pname:{
        type: String
    }, 
    pprice:{
        type: Number
    },
    pduration: {
        type:Number
    },
    pdescription:{
        type: String
    },
    pillustration:{
        data:Buffer,
        contentType: String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
})

module.exports = Prestation