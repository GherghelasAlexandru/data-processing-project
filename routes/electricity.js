const express = require('express');
const electricityConsumptionRouter = express.Router();

const {
        getAllCountriesAndElectricityConsumption,
        getAllCountriesAndElectricityConsumptionByCountry,
        postCountryAndElectricityConsumption,
        updateCountryAndElectricityConsumption,
        deleteCountryAndElectricityConsumption
} = require('../controller/electricity');

electricityConsumptionRouter.get('/', getAllCountriesAndElectricityConsumption);
electricityConsumptionRouter.get('/:country', getAllCountriesAndElectricityConsumptionByCountry);
electricityConsumptionRouter.post('/', postCountryAndElectricityConsumption);
electricityConsumptionRouter.put('/:id',updateCountryAndElectricityConsumption);
electricityConsumptionRouter.delete('/:id',deleteCountryAndElectricityConsumption);

module.exports = electricityConsumptionRouter;
