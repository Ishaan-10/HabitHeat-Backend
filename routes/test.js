const express = require('express');

const testRouter = express.Router();

testRouter.get('/',(req,res)=>{
    res.send("Server actually runs");
})

module.exports = testRouter;