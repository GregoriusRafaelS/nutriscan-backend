const express = require('express');
const handleTokenRefresh = require('./handler');

const router = express.Router();

router.post("/refresh", handleTokenRefresh);

module.exports = router