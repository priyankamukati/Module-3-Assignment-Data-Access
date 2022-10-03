const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router
.route('/')
.get(customersController.getAllProductCategory);

module.exports = router;