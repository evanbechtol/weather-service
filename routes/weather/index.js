const express = require( 'express' );
const router = express.Router();
const WeatherController = require( "../../controllers/Weather" );

router.get( '/weather', WeatherController.getWeather );

router.get( '/forecast', WeatherController.getForecast );

module.exports = router;
