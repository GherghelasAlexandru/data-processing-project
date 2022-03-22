const express = require('express');
const apiRouter = express.Router();

const electricityRouter = require('./electricity');


//specify all endpoint
apiRouter.use('/electricity', electricityRouter);

module.exports = apiRouter;
