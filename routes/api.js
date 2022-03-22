const express = require('express');
const apiRouter = express.Router();

const electricityConsumptionRouter = require('./electricity');
const happinessRouter = require('./happiness');
const internetRouter = require('./internet');


//specify all endpoint
apiRouter.use('/electricity', electricityConsumptionRouter);
apiRouter.use('/happiness', happinessRouter);
apiRouter.use('/internet', internetRouter);

module.exports = apiRouter;
