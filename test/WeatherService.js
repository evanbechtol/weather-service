const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;
const config = require( "../config" );

describe( "Weather Service", () => {
  const WeatherService = require( "../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

  it( "Should initialize an instance of the weather service", () => {
    assert.instanceOf( WeatherServiceInstance, WeatherService );
  } );

  describe( "Check methods", () => {

    describe( "Method getApi", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.getApi );
      } );
    } );

    describe( "Method setApi", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.setApi );
      } );
    } );

    describe( "Method makeRequest", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.makeRequest );
      } );
    } );

    describe( "Method getWeather", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.getWeather );
      } );

      let weatherResponse;

      it( "Should return an object", async () => {
        const latitude = "32.8998";
        const longitude = "97.0403";
        weatherResponse = await WeatherServiceInstance.getWeather( latitude, longitude );
        assert.isObject( weatherResponse );
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
