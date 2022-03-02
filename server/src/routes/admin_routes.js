const express = require('express')
const router = express.Router()

//signin as admin
router.post('/newadmin',(req,res)=>{})

//login as admn
router.get('login-admin', (req,res)=>{})

//upate profile
router.put('reset-password',(req,res)=>{})

//add a service
router.post('add', (req,res)=>{})

//update a service
router.put('update', (req,res)=>{})

//remove a service
router.delete('delete', (req,res)=>{})

//get all the rdv
router.get('touslesrdv', (req,res)=>{})
//desactivate a beautifyer