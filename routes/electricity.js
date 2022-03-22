const express = require('express');
const electricityConsumptionRouter = express.Router();

const {getAllCountriesAndElectricityConsumption, createCountryAndElectricityConsumption } = require('../controller/electricity');

electricityConsumptionRouter.get('/', getAllCountriesAndElectricityConsumption);
electricityConsumptionRouter.post('/', createCountryAndElectricityConsumption);


module.exports = electricityConsumptionRouter;
