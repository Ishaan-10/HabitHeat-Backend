const express = require('express');
const app = express();
const testRouter = require('./routes/test');
const habitRoute = require('./routes/habits');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const db = mongoose.connection;
const morgan = require('morgan');

// Connect Database
mongoose.connect(process.env.DATABASE_KEY, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Database Connected")
});

// Middlewares
app.use(morgan('tiny'));
app.use(bodyParser.json());

// Routes
app.use('/test',testRouter);
app.use('/habits',habitRoute);
app.use('/user', userRoute);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server running");
})
