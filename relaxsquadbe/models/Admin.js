const mongoose = require('mongoose')

const Admin = mongoose.model('Admin',{
    adname:{
        type: String
    },
    adrole:{
        type: String
    },
    adphone:{
        type: String
    },
    password:{
        type: String
    }

})

moule.exports = Admin