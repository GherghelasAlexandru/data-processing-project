const express = require('express');
const happinessRouter = express.Router();

const {
    getAllCountriesAndHappiness,
    getAllCountriesAndHappinessById,
    postCountryAndHappiness,
    updateCountryAndHappiness,
    deleteCountryAndHappiness
} = require('../controller/happiness');

happinessRouter.get('/', getAllCountriesAndHappiness);
happinessRouter.get('/:id', getAllCountriesAndHappinessById);
happinessRouter.post('/', postCountryAndHappiness);
happinessRouter.put('/:id',updateCountryAndHappiness);
happinessRouter.delete('/:id',deleteCountryAndHappiness);

module.exports = happinessRouter;
