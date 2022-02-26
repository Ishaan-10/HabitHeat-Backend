var mongoose = requrie('mongoose');

var Schema = mongoose.Schema;

var SingleSessionSchema = new Schema ({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 2, // default: 2, set in state in Frontend
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

  remarks: {
    
  }
}) 