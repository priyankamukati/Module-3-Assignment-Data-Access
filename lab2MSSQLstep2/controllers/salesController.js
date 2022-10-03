const db = require('../config/db.manager');

exports.getAllSales = function (req, res) {
    const { name } = req.query;
    if (name) {
        db.getSalesDetailsByProductName(name).then(results4 => {
            console.log(results4);
            res.status(200).json({
                status: 'successfull',
                data: results4.recordsets[0]
            });
        });
    } else {
        db.getSalesProducts().then(results => {
            console.log(results);
            res.status(200).json({
                status: 'successfull',
                data: results.recordsets[0]
            }); // send all the data
        });
    }
}


exports.getSalesByID = function (req, res) {
    const { id } = req.params; // get id
    db.getSalesProductsByID(id).then(results1 => {
        console.log(results1);
        if (results1.recordsets[0].length > 0) {
            res.status(200).json({
                status: 'successfull',
                data: results1.recordsets[0]
            });
        } else {
            res.status(404).json({
                status: 'not found'
            });
        }
    });
}


exports.createNewSales = function (req, res) { // must select the body to be raw->JSON in Postman  
    const { body } = req;// req.body (attribute)
    const { productId, name, productNumber, color, listPrice, standardCost, sellStartDate } = body;

    const salesProduct1 = db.createNewSalesProducts(productId, name, productNumber, color, listPrice, standardCost, sellStartDate).then(results2 => {
        console.log(results2);
        res.status(200).json({
            //status: 'no implemented'
            status: 'successfull',
            data: results2.recordsets[0]
        });
    });
}


exports.patchSalesById = function (req, res) { // must select the body to be raw->JSON in Postman
    const { body } = req;// req.body (attribute)
    const { id } = req.params;// get id (attribute)
    const { name, productNumber } = body;
    db.patchSalesProductsByID(id, name, productNumber).then(results3 => {
        console.log(results3);
        res.status(200).json({
            status: 'successfull',
            data: results3.recordsets[0]
        });
    });
}


exports.deleteSalesByID = function (req, res) { // must select the body to be raw->JSON in Postman
    const { id } = req.params;// get id
    db.deleteSalesProductsByID(id).then(results4 => {
        console.log(results4);
        res.status(200).json({
            //status: 'no implemented'
            status: 'successfull',
            data: results4.recordsets[0]
        });
    });
}
