const express = require('express')
const router = express.Router()


// signin user (creating user )

router.post('/signin', (req,res)=>{})

//reading user (login)
router.get('/login', (req,res)=>{})

//updating profile
router.put('/update',(req,res)=>{})

//deleting account 
router.delete('/delete', (req,res)=>{})

//taking an appointment
router.post('/priserdv',(req,res)=>{})

//updating an appointement 
router.put('/modifierrv',(req,res)=>{})

//cancelling an appointment 
router.del('/priserdv',(req,res)=>{})

//list all his appointment 
router.get('/priserdv',(req,res)=>{})

//adding a review
router.post('/soumissionavis',(req,res)=>{})

//sees all the beautifyer to make a choice
router.get('/priserdv',(req,res)=>{})