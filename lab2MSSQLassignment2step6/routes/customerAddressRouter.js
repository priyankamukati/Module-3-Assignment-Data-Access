const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router
.route('/')
.get(customersController.getAllCustomerAddress);

router
.route('/:id')
.get(customersController.getAllCustomersByJoin);

module.exports = router;