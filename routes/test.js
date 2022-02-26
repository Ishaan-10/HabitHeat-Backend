const express = require('express');

const testRouter = express.Router();

testRouter.get('/',(req,res)=>{
    res.send("reached endpoint");
})

module.exports = testRouter;