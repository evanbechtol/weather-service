const assert = require( "chai" ).assert;
const expect = require( "chai" ).expect;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;
const config = require( "../config" );

describe( "Weather Service", () => {
  const WeatherService = require( "../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

  it( "Should initialize an instance of the weather service", () => {
    expect( WeatherServiceInstance ).to.be.an.instanceOf( WeatherService );
  } );

  describe( "Check methods", () => {

    describe( "Method getApi", () => {
      it( "Should have method", () => {
        expect( WeatherServiceInstance ).itself.to.respondTo( "getApi" );
      } );
    } );

    describe( "Method setApi", () => {
      it( "Should have method", () => {
        expect( WeatherServiceInstance ).itself.to.respondTo( "setApi" );
      } );
    } );

    describe( "Method getWeather", () => {
      it( "Should have method", () => {
        expect( WeatherServiceInstance ).itself.to.respondTo( "getWeather" );
      } );

      let weatherResponse;

      it( "Should return an object", async () => {
        const latitude = "32.8998";
        const longitude = "97.0403";
        weatherResponse = await WeatherServiceInstance.getWeather( latitude, longitude );
        assert.isObject(weatherResponse);
      } );

      describe( "Response should have keys", () => {
        it( "coord", () => {
          assert.property( weatherResponse, "coord" );
        } );

        it( "weather", () => {
          assert.property( weatherResponse, "weather" );
        } );

        it( "name", () => {
          assert.property( weatherResponse, "name" );
        } );
      } );
    } );
  } );

} );
