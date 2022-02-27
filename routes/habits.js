const express = require('express');
const habitsRoute = express.Router();
const userProfile = require('../model/userProfile');
const singleSession = require('../model/sessionModel');

// Home screen
habitsRoute.get('/',async (req,res)=>{
    console.log(req.query);
    const {uid} = req.query;
    const user = await userProfile.findOne({uid}).populate({
        path:'habits',
        populate:{
            model:singleSession,
            path:'sessions'
        }
    });
    console.log(user);
    res.json(user);
})

// Add new habit to track
habitsRoute.post('/add',async (req,res)=>{
    const {name,motivation, uid} = req.body;
    const user = await userProfile.findOne({uid});
    console.log(user);
    user.habits.push({
        name:name,
        motivation: motivation,
        streak:0,
        sessions:new singleSession([]) // Changes needed
    })
    user.save();
    res.json(user);
})

// About a single habit
habitsRoute.get('/habit',async (req,res)=>{
    const {uid,habit_id}=req.body;
    const user = await userProfile.find({uid});
    // const motivation = await user.habit.motivation;
    const habit = await user.habits.id(habit_id).populate('singleSession');
    res.json(habit);
})

// Adding session of habit
habitsRoute.post('/sess/add',async (req,res)=>{
    const {rating,duration,remark,uid,date,habit_id}=req.body;
    const habit = await user.habits.id(habit_id).populate('singleSession');
    habit.sessions.push(new singleSession({rating,duration,remark}))
    await habit.save()
})

module.exports = habitsRoute;