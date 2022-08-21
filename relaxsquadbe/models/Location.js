const mongoose = require('mongoose')

const Location = mongoose.model('Location',{
    city:{
        type: String
    },
    code:{
        type:String
    },
    description:{
        type:String
    }, 
    quaters:[{
        type: String
    }]
})

module.exports = Location