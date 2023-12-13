const express = require('express');
const {authenticateUser,isUserAvailable} = require('../middleware/authenticateUser');
const { jobFetcher,addNewJob,updateJob } = require('../controller/portal.controller');

const router = express.Router();

// home page 
router.get("/", isUserAvailable,jobFetcher);

router.post("/addJob", authenticateUser, addNewJob);
router.put('/updateJobPost',authenticateUser,updateJob);


module.exports = router;