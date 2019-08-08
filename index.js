// Create express instance to setup API
const ExpressLoader = require( "./loaders/Express" );
new ExpressLoader();


async function main() {
  const config = require( "./config" );
  const WeatherService = require( "./services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

  const latitude = "32.8998";
  const longitude = "-96.80667";

  const response = await WeatherServiceInstance.getWeather(latitude, longitude);
  console.log( response );

}

main();
