const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getCustomersDetails() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT * FROM salesLT.Customer
`);
    console.log(`Returned SQL results`);
    return results;
}

async function getAddressDetails() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT * FROM salesLT.Address
`);
    console.log(`Returned SQL results`);
    return results;
}

async function getCustomerAddress() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT * FROM salesLT.CustomerAddress
`);
    console.log(`Returned SQL results`);
    return results;
}

async function getProductCategory() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT * FROM salesLT.ProductCategory
`);
    console.log(`Returned SQL results`);
    return results;
}

async function getProductModel() {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT * FROM salesLT.ProductModel
`);
    console.log(`Returned SQL results`);
    return results;
}

async function createNewCustomer(customerID,nameStyle,firstName,lastName,passwordHash,passwordSalt,rowguid,modifiedDate) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    const query = `SET IDENTITY_INSERT salesLT.Customer ON;    
    INSERT INTO salesLT.Customer(customerID,nameStyle,firstName,lastName,passwordHash,passwordSalt,rowguid,modifiedDate) 
    VALUES(${customerID}, '${nameStyle}', '${firstName}', '${lastName}', '${passwordHash}','${passwordSalt}','${rowguid}', '${modifiedDate}')`

    let results = await dbContext.request()
        .query(query
        );
    console.log(`Returned SQL results`);
    return results;
}

async function getCustomersDetailsByJoin(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
        .query(`
SELECT salesLT.Customer.customerID,salesLT.Customer.title,salesLT.Customer.firstName,salesLT.Customer.middleName,
salesLT.Customer.lastName,salesLT.CustomerAddress.AddressID,salesLT.CustomerAddress.AddressType FROM salesLT.Customer INNER JOIN salesLT.CustomerAddress 
on salesLT.Customer.customerID =salesLT.CustomerAddress.customerID and salesLT.Customer.customerID = ${id}
`);
    console.log(`Returned SQL results`);
    return results;
}

async function getCustomerDetailsByID(id) {
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results1 = await dbContext.request()
        .query(`
SELECT
customerID,nameStyle,firstName,lastName,passwordHash,passwordSalt,rowguid,modifiedDate
FROM
salesLT.Customer
WHERE customerID = ${id}
`);
    console.log(`Returned SQL results`);
    return results1;
}

module.exports = {
    getCustomersDetails: getCustomersDetails, getAddressDetails:getAddressDetails, getCustomerAddress: getCustomerAddress, 
    getProductCategory: getProductCategory, getProductModel: getProductModel, createNewCustomer: createNewCustomer,
    getCustomersDetailsByJoin: getCustomersDetailsByJoin,getCustomerDetailsByID:getCustomerDetailsByID

};