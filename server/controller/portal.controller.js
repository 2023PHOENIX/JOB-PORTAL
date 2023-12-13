const User = require("../model/User");
const JobListModel = require("../model/Job");
const mongoose = require("mongoose");
const Job = require("../model/Job");
const jobFetcher = async (req, res, next) => {

    try {

        const JobPost = await JobListModel.find({});

        res.status(200).json(JobPost);
    } catch (err) {
        next(err);
    }

}


const addNewJob = async (req, res, next) => {

    const details = req.body
    const user = req.user;

    details['postedBy'] = user._id;

    const job = new JobListModel(details);
    try {

        const response = await job.save();

        res.status(200).json({ status: 'success', message: 'Job posted successfully' });
    } catch (e) {
        next(e);
    }
}


const updateJob = async (req, res, next) => {
    const { postedBy } = req.body;
    try {
        const ID = new mongoose.Types.ObjectId(postedBy);
        if (ID.equals(req.user._id)) {

            // update the entry 
            const exisitingJob = await Job.findOne({ _id: req.body._id }); // *need to find the job first by _id.

            if (!exisitingJob) {
                return res.status(404).json({ message: 'Job not found' });
            } else {
                const updated = req.body.updates;
                Object.keys(updated).forEach(feild => {
                    exisitingJob[feild] = updated[feild];
                });
                
                const updatedJob = await exisitingJob.save();
                res.status(200).json({ message: "Job updated successfully", updatedJob });
            }

            res.send({ status: 'success', message: "hello" })
        } else {
            res.status(400).send({ message: "unauthorized operation" });
        }
    } catch (e) {
        next(e);
    }

}
module.exports = {
    jobFetcher,
    addNewJob,
    updateJob,
}