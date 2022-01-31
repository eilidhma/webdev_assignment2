const express = require('express');
const router = express.Router();
const { getOuncesController, getInchesController, getKmController, getKgsController, getFahrenheitController } = require('../Controller/conversion')

router.get('/conversion/inches', getInchesController)
router.get('/conversion/km', getKmController)
router.get('/conversion/kgs', getKgsController)
router.get('/conversion/ounces', getOuncesController)
router.get('/conversion/degrees', getFahrenheitController)


module.exports = router

