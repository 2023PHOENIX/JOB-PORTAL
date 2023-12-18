const User = require("../model/User");
const JobListModel = require("../model/Job");
const mongoose = require("mongoose");
const Job = require("../model/Job");
const jobFetcher = async (req, res, next) => {
  try {
    // const JobPost = await JobListModel.find({});
    const result = await JobListModel.find(
      {},
      {
        _id: 1,
        companyName: 1,
        companyLogo: 1,
        jobPosition: 1,
        jobType: 1,
        workType: 1,
        location: 1,
        skills: 1,
      },
    );
    console.log(result);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const addNewJob = async (req, res, next) => {
  const details = req.body;
  const user = req.user;

  details["postedBy"] = user._id;

  const job = new JobListModel(details);
  try {
    const response = await job.save();

    res
      .status(200)
      .json({ status: "success", message: "Job posted successfully" });
  } catch (e) {
    next(e);
  }
};

// ^ updates the current job list.
const updateJob = async (req, res, next) => {
  const { postedBy } = req.body;
  try {
    const ID = new mongoose.Types.ObjectId(postedBy);
    if (ID.equals(req.user._id)) {
      // update the entry
      const exisitingJob = await Job.findOne({ _id: req.body._id }); // *need to find the job first by _id.

      if (!exisitingJob) {
        return res.status(404).json({ message: "Job not found" });
      } else {
        const updated = req.body.updates;
        Object.keys(updated).forEach((feild) => {
          exisitingJob[feild] = updated[feild];
        });

        const updatedJob = await exisitingJob.save();
        res
          .status(200)
          .json({ message: "Job updated successfully", updatedJob });
      }

      res.send({ status: "success", message: "hello" });
    } else {
      res.status(400).send({ message: "unauthorized operation" });
    }
  } catch (e) {
    next(e);
  }
};

const filteredJobs = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const response = await Job.find({ skills: { $in: data.skills } });
    console.log(response);
    res.send({ data: response, message: "ok" });
  } catch (e) {
    next(e);
  }
};

const fetchDataByID = async (req, res, next) => {
  try {
    const id = req.params;
    const _id = new mongoose.Types.ObjectId(id);
    const response = await JobListModel.findById(_id);

    res.status(200).send(response);
  } catch (e) {
    next(e);
  }
};
module.exports = {
  jobFetcher,
  addNewJob,
  updateJob,
  filteredJobs,
  fetchDataByID,
};
