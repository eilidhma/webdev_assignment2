const express = require('express');
const router = express.Router();
const { getCurrency, getOunces, getInches, getKgs, getKm } = require('../Controller/conversion')

router.get('http://api.exchangeratesapi.io/v1/latest?access_key=a8482c395e320816755d6ef3d155c161&symbols=USD,AUD,CAD,PLN,MXN&format=1', getCurrency)
router.post('/conversion/ounces', getOunces(4))
router.post('/conversion/inches', getInches)
router.post('/conversion/kgs', getKgs(50))
router.post('/conversion/km', getKm(60))




module.exports = router

