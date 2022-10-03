const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getSalesProducts() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT TOP(20)
productId,
name,
productNumber,
color,
listPrice
FROM
salesLT.Product
`);
    console.log(`Returned SQL results`);
    return results;
}
async function getSalesProductsByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results1 = await dbContext.request()
        .query(`
SELECT
productId,
name,
productNumber,
color,
listPrice
FROM
salesLT.Product
WHERE productId = ${id}
`);
    console.log(`Returned SQL results`);
    return results1;
}
async function createNewSalesProducts(productId, name, productNumber, color, listPrice, standardCost, sellStartDate) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    const query = `SET IDENTITY_INSERT salesLT.Product ON;    
    INSERT INTO salesLT.Product(productId, name, productNumber, color, listPrice, standardCost,sellStartDate) 
    VALUES(${productId}, '${name}', '${productNumber}', '${color}', ${listPrice}, ${standardCost},${sellStartDate})`
    let results2 = await dbContext.request()
        .query(query
        );
    console.log(`Returned SQL results`);
    return results2;
}
async function patchSalesProductsByID(id,name, productNumber) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results3 = await dbContext.request()
        .query(`
        UPDATE salesLT.Product SET name='${name}', productNumber='${productNumber}'
        WHERE productId = ${id}
        
`);
    console.log(`Returned SQL results`);
    return results3;
}
async function getSalesDetailsByProductName(name) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results4 = await dbContext.request()
        .query(`
        SELECT * FROM salesLT.Product
        WHERE name = ${name}
`);
    console.log(`Returned SQL results`);
    return results4;
}
async function deleteSalesProductsByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results5 = await dbContext.request()
        .query(`
DELETE FROM salesLT.Product WHERE productId = ${id}
`);
    console.log(`Returned SQL results`);
    return results5;
}

//Export
module.exports = {
    getSalesProducts: getSalesProducts, getSalesProductsByID: getSalesProductsByID, createNewSalesProducts: createNewSalesProducts, patchSalesProductsByID:
    patchSalesProductsByID, deleteSalesProductsByID: deleteSalesProductsByID, getSalesDetailsByProductName: getSalesDetailsByProductName
};