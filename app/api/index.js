const routers = require('../api/v1/routers/product-router');
const express = require('express');

const app = express();

app.use('/v1', routers);

module.exports = app;
