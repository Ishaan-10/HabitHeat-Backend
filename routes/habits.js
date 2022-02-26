const express = require('express');
const habitsRoute = express.Router();
const userProfile = require('../model/userProfile');

habitsRoute.get('/',async (req,res)=>{
    console.log(req.query);
    const {email} = req.query;
    const user = await userProfile.find({email}).populate('singleSession');
    console.log(user);
    res.json(user);
})



module.exports = habitsRoute;