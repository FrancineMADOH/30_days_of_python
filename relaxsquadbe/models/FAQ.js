const mongoose = require('mongoose')

const FAQ = mongoose.model('FAQ', {
    question:{
        type: String
    },
    answer:{
        type: String
    },
    upvotes: {
        type: Number
    }
})

module.exports =  FAQ