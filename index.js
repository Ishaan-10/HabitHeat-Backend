const express = require('express');
const app = express();
const testRouter = require('./routes/test');

app.use('/test',testRouter);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running");
})
