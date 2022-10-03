const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
var corsOptions = {

origin: "http://localhost:6000"
};
app.use(cors(corsOptions));
if (process.env.NODE_ENV === 'development') {
app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
console.log('Hello from the middleware 👋');
next();
});
const customersRouter = require('./routes/customersRouter');
const addressRouter = require('./routes/addressRouter');
const customerAddressRouter = require('./routes/customerAddressRouter');
const productCategoryRouter = require('./routes/productCategoryRouter');
const productModelRouter = require('./routes/productModelRouter');
app.use('/api/v1/customers', customersRouter);
app.use('/api/v1/address', addressRouter);
app.use('/api/v1/customeraddress', customerAddressRouter);
app.use('/api/v1/productcategory', productCategoryRouter);
app.use('/api/v1/productmodel', productModelRouter);

module.exports = app;



