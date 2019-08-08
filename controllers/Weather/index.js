const config = require( "../../config" );
const WeatherService = require( "../../services/WeatherService" );
const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

module.exports = {
  getForecast,
  getWeather
};

function getForecast ( req, res ) {

}

function getWeather ( req, res ) {

}
