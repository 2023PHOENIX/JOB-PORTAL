const express = require('express');
const authenticateUser = require('../middleware/authenticateUser');
const { jobFetcher,addNewJob } = require('../controller/portal.controller');

const router = express.Router();

// home page 
router.get("/", authenticateUser,jobFetcher);

router.post("/addJob",authenticateUser,addNewJob)


module.exports = router;