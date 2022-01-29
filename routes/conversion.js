const express = require('express');
const router = express.Router();
const { getCurrency, getOunces, getInches, getInchesController, getKgs, getKm } = require('../Controller/conversion')

// router.get('/conversion/currency', getCurrency)
// router.get('/conversion/ounces', getOunces(()=>{}))
router.get('/conversion/inches', getInchesController)
router.get('/conversion/kgs', getKgs)
router.get('/conversion/km', getKm)


//http://localhost:3000/conversion/inches?a=12

module.exports = router

