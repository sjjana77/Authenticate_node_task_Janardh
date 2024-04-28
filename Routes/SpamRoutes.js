const express = require('express');
const router = express.Router();
const SpamController = require('../controllers/SpamController');

router.post('/mark_spam', SpamController.markSpam);

module.exports = router;