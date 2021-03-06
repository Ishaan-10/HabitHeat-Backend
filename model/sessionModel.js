const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SingleSessionSchema = new Schema({
  sessions: [
    {
      rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0, // default: 2, set in state in Frontend
        required: true,
      },

      // for the duration frontend will have hours and minutes field 
      // function to parse hours into minutes since backend will store minutes.
      // Add the defaults to the frontend.
      duration: {
        type: Number,
        default: 60,
        required: true,
      },
      date:{
        type:Date,
        required:true
      },
      remarks: String
    }
  ]
})

const singleSession = mongoose.model('singleSession', SingleSessionSchema);
module.exports = singleSession;