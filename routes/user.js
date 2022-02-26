const express = require('express');
const userRoute = express.Router();
const userProfile = require('../model/userProfile');

// Getting user profile from flutter
userRoute.post('/', async(req, res) => {
  const {name, email, uid, imgLink} = req.body;
  // const user = await userProfile.id(email);
  // user.push(new singleSession({rating,duration,remark}))
  // await habit.save()
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

module.exports = userRoute;
