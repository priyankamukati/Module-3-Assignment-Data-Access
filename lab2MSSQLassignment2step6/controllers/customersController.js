const db = require('../config/db.manager');

exports.getAllCustomers = function (req, res) {
    db.getCustomersDetails().then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}

exports.getAllAddress = function (req, res) {
    db.getAddressDetails().then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}

exports.getAllCustomerAddress = function (req, res) {
    db.getCustomerAddress().then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}

exports.getAllProductCategory = function (req, res) {
    db.getProductCategory().then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}

exports.getAllProductModel = function (req, res) {
    db.getProductModel().then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}


exports.getCustomerByID = function (req, res) {
    const { id } = req.params; 
    db.getCustomerDetailsByID(id).then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}


exports.createNewCustomerList = function (req, res) { 
    const { body } = req;
    const {CustomerID,NameStyle,FirstName,LastName,PasswordHash,PasswordSalt,rowguid,ModifiedDate} = body;
    db.createNewCustomer(CustomerID,NameStyle,FirstName,LastName,PasswordHash,PasswordSalt,rowguid,ModifiedDate)
    .then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        });
    });
}


exports.getAllCustomersByJoin = function (req, res) {
    const { id } = req.params;
    db.getCustomersDetailsByJoin(id).then(results => {
        console.log(results);
        if (results.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}


