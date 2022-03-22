const dbConnect = require('../dbConnect');

const JsonValidator = require('jsonschema').Validator;
const v = new JsonValidator();
const electricitySchemaJson = require('../schemaForValidation/electricity');
v.addSchema(electricitySchemaJson);

const xml = require("object-to-xml");

exports.getAllCountriesAndElectricityConsumption = (req, res, next) => {
    dbConnect.query('SELECT * FROM electricity',(err, electricityConsumption) => {
        if(err) {
            next(err)
        } else {
            if(req.get('Content-Type') === 'application/xml') {
                res.send(xml( {electricityConsumption: electricityConsumption}));
            }
            if(req.get('Content-Type') === 'application/json') {
                res.status(200).json({electricityConsumption: electricityConsumption});
            }
        }
    });
};

exports.createCountryAndElectricityConsumption = (req, res, next) => {
    if(req.get('Content-Type') === 'application/json') {
        const country = req.body.country;
        const percentage = req.body.percentage;

        try {
            v.validate(req.body, electricitySchemaJson, {throwError: true})
        } catch (e) {
            res.status(401).send('Json does not match with schema ' + e.message);
            return;
        }

        const electricityDetails = {
            name: country,
            year: percentage,
        };

        dbConnect.query('INSERT INTO electricity SET ?', electricityDetails, (err) => {
            if(err) {
                next(err)
            }
            else {
                res.status(201).json({electricityConsumption: req.body});
            }
        })
    }
};
