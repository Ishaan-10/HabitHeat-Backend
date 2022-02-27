const express = require('express');
const userRoute = express.Router();
const mongoose = require('mongoose');
const userProfile = require('../model/userProfile');

// Getting user profile from flutter
userRoute.post('/', async(req, res) => {
  console.log(req.body);
  const {name, email, uid, imgLink} = req.body;
  const user = await userProfile.find({uid});
  console.log(user);
  if(user.length===0){
    const new_user = new userProfile(
      {
        name: name,
        email: email,
        uid: uid,
        imgLink: imgLink,
      }
    );
    console.log("Made new user")
    new_user.save();
    res.json(new_user);
  }else{
    console.log("Already exists")
    res.json(user);
  }

});

// searching for a paticular user. 
// return -- 
// name, imgLink, Habits - List, Heatmap for last 30days.

module.exports = userRoute;
