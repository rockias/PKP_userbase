const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    salutation :{
        type:String,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required:true
    },
});

module.exports = User =  mongoose.model('user', UserSchema);