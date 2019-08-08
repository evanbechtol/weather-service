// Create express instance to setup API
const ExpressLoader = require( "./loaders/Express" );
new ExpressLoader();

const config = require( "./config" );
const WeatherService = require( "./services/WeatherService" );
const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

const latitude = "32.8998";
const longitude = "-96.80667";

async function callApi() {
  return await WeatherServiceInstance.getWeather(latitude, longitude);
}
const response = callApi();
console.log( response );
