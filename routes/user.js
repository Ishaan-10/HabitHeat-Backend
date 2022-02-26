const express = require('express');
const userRoute = express.Router();
const userProfile = require('../model/userProfile');

// Getting user profile from flutter
userRoute.post('/', async(req, res) => {
  const {name, email, uid, imgLink} = req.body;
  const new_user = new userProfile(
    {
      name: name,
      email: email,
      uid: uid,
      imgLink: imgLink,
    }
  );

  new_user.save((err) => {
    if (err) return handleError(err);
  });  
});

// searching for a paticular user. 
// return -- 
// name, imgLink, Habits - List, Heatmap for last 30days.

module.exports = userRoute;
