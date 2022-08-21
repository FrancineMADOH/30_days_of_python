const mongoose  = require('mongoose')

const  Category = mongoose.model('Category', {
    catname: {
        type: String
    },
    catdescription:{
        type: String
    },
    catillustration:{
        data: Buffer,
        contentType:String
    }
})

module.exports =  Category