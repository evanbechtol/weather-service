const express = require( 'express' );
const router = express.Router();
const WeatherController = require( "../../controllers/Weather" );
const WeatherValidator = require( "../../middlewares/validators/Weather" );

router.get( '/weather',
  WeatherValidator.checkForParams,
  WeatherController.getWeather
);

router.get( '/forecast',
  WeatherValidator.checkForParams,
  WeatherController.getForecast
);

module.exports = router;
