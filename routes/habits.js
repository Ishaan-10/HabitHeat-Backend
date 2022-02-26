const express = require('express');
const habitsRoute = express.Router();
const userProfile = require('../model/userProfile');
const singleSession = require('../model/sessionModel');

// Home screen
habitsRoute.get('/',async (req,res)=>{
    console.log(req.query);
    const {email} = req.query;
    const user = await userProfile.find({email}).populate('singleSession');
    console.log(user);
    res.json(user);
})


// Add new habit to track
habitsRoute.post('/add',(req,res)=>{
    const {name,uid} = req.body;
    const user = await userProfile.find({uid});
    user.habits.push({
        name:name,
        streak:0,
        sessions:new singleSession([]) // Changes needed
    })
    user.save();
    res.end();
})

// About a single habit
habitsRoute.get('/habit',(req,res)=>{
    const {uid,habit_id}=req.body;
    const user = await userProfile.find({uid});
    const habit = await user.habits.id(habit_id).populate('singleSession');
    res.json(habit);
})
// Adding session of habit
habitsRoute.post('/sess',(req,res)=>{
    const {rating,duration,remark,uid,}=req.body;
    const habit = await user.habits.id(habit_id).populate('singleSession');
    habit.sessions.push(new singleSession({rating,duration,remark}))
    habit.save()
})


module.exports = habitsRoute;