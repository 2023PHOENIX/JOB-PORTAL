const User = require("../model/User");
const JobListModel = require("../model/Job");

const jobFetcher = (req, res,next) => {
    
}


const addNewJob = async(req, res, next) => {
    



    const details = req.body
    const user = req.user;

    details['postedBy'] = user._id;
    
    const job = new JobListModel(details);
    try {
        
        const response = await job.save();
        
        res.status(200).json({status  : 'success',message : 'Job posted successfully'}); 
    } catch (e) {
        next(e);
    }
}


module.exports = {
    jobFetcher,
    addNewJob,
}