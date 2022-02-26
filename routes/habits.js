const express = require('express');
const habitsRoute = express.Router();
const userProfile = require('../model/userProfile');
const singleSession = require('../model/sessionModel');

habitsRoute.get('/',async (req,res)=>{
    console.log(req.query);
    const {email} = req.query;
    const user = await userProfile.find({email}).populate('singleSession');
    console.log(user);
    res.json(user);
})

habitsRoute.post('/add',(req,res)=>{
    const {name,uid} = req.body;
    const user = await userProfile.find({uid});
    user.habits.push({
        name:name,
        streak:0,
        sessions:new singleSession([]) // Changes needed
    })
    user.save();
})



module.exports = habitsRoute;