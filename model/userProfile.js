const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    name:{
        type:String,
        rquired:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    uid:{
        type:String,
        required:true,
        unique:true,
    },
    imgLink:String,
    habits:[{
        name:String,
        streak:Number,
        motivation: String,
        sessions:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'singleSession'
        }
    }],
    streak:{
        type:Number,
        default:0,
    }
}, {timestamps:true})

const userProfile = mongoose.model('userProfile', userProfileSchema);
module.exports=userProfile;