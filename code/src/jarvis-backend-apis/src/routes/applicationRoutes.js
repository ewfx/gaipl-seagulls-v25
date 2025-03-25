const express = require('express');
const router = express.Router();
const { getApplicationDetails } = require('../controllers/applicationController');

router.get('/applications/:appName', getApplicationDetails);

module.exports = router;
