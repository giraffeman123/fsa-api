const express = require("express");
const router = express.Router();
const flightController = require("../controller/flightController");
const validate = require('./validate');

/**Login */
router.route('/airport/most-movement').get(validate.checkYear, flightController.getAirportWithMostMovement);
router.route('/airline/most-flights').get(validate.checkYear, flightController.getAirlineWithMostFlights);
router.route('/day/most-flights').get(validate.checkYear, flightController.getDayWithMostFlights);
router.route('/airline/more-than-2-flights').get([], flightController.getAirlinesWithMoreThan2Flights);

module.exports = router
