const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router
.route('/')
.get(customersController.getAllCustomers)
.post(customersController.createNewCustomerList);

router
.route('/:id')
.get(customersController.getCustomerByID)

module.exports = router;