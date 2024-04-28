const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/SearchController');
const verifyToken = require('../verifyToken');

router.get('/name/:name', verifyToken, SearchController.searchByName);
router.get('/phone/:phone_number', verifyToken, SearchController.searchByPhone);

module.exports = router;