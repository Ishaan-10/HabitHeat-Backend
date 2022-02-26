const express = require('express');
const app = express();
const testRouter = require('./routes/test');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database Connected")
});

app.use('/test',testRouter);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running");
})
