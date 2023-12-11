const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        immutable: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10}$/g,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

module.exports = new mongoose.model('User', UserSchema);

