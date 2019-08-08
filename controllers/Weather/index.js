const config = require( "../../config" );
const WeatherService = require( "../../services/WeatherService" );
const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

module.exports = {
  getForecast,
  getWeather
};

async function getForecast ( req, res ) {
  try {
    const ForecastResponse = await WeatherServiceInstance.getForecast( req.weatherParams );

    if (!ForecastResponse) {
      return res.status( 404 ).send();
    }

    return res.status( ForecastResponse.cod ).send( ForecastResponse );
  } catch( err ) {
    return res.status( err.cod ).send( err );
  }
}

function getWeather ( req, res ) {

}
