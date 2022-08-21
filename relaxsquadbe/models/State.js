const mongoose = require('mongoose')

mongoose.model('State',{
    sname:{
        type:String
    },
    sdescription:{
        type:String
    },
    sID: {
        type: Number
    }
})

module.exports =  State