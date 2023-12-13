const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true,
    },
    companyLogo: {
        type: String,
        requried: true,
    },
    jobPosition: {
        type: String,
        requried: true,
    },
    monthySalary: {
        type: Number,
        requried: true,
    },
    jobType: {
        type: String,
        enum: ['fulltime', 'parttime', 'intern'],
        required: true
    },
    workType: {
        type: String,
        enum: ['remote', 'office'],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        requried: true,
    },
    aboutCompany: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    information: {
        type: String,
        required: true,
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    }, 
    createdAt: {
        type: String,
        default: Date.now(),
        required: true,
        immutable: true,
    },
    updatedAt: {
        type: String,
        default: Date.now(),
        required: true,
    }
});


module.exports = new mongoose.model('JobList', JobSchema);