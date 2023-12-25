const express = require("express");
const {
  authenticateUser,
  isUserAvailable,
} = require("../middleware/authenticateUser");
const {
  jobFetcher,
  addNewJob,
  updateJob,
  filteredJobs,
  fetchDataByID,
} = require("../controller/portal.controller");

const router = express.Router();

// home page
router.get("/", isUserAvailable, jobFetcher);

router.post("/addJob", authenticateUser, addNewJob);
router.put("/updateJobPost", authenticateUser, updateJob);
router.post("/filteredPost", filteredJobs);
router.get("/fetchPost/:id", authenticateUser, fetchDataByID);

module.exports = router;
