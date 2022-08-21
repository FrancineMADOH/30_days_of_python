const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
require('./mongoose.js')

const app = express()

app.get('/', (req,res)=>{
    res.send('welcome to our application ')
})

app.listen(port, ()=>{
    console.log('listening on port ' +  port)
})