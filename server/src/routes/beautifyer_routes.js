const express = require('express')
const router = express.Router()

//login as a beautifyer 
router.get('/connexion', (req,res)=>{})

//consult my message to see if i've been booked
router.get('/mestraveaux', (req,res)=>{})

//reset their password
router.put('/resetpassword', (req,res)=>{})

//leave a review about the client 