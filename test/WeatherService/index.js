const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;
const config = require( "../../config" );

describe( "Weather Service", () => {
  const WeatherService = require( "../../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );

  it( "Should initialize an instance of the weather service", () => {
    assert.instanceOf( WeatherServiceInstance, WeatherService );
  } );

  describe( "Method should exist", () => {

    describe( "getApi", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.getApi );
      } );

      it( "Should return a string", () => {
        assert.isString( WeatherServiceInstance.getApi() );
      } );
    } );

    describe( "setApi", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.setApi );
      } );
    } );

    describe( "makeRequest", () => {
      it( "Should have method", () => {
        assert.isFunction( WeatherServiceInstance.makeRequest );
      } );
    } );
  } );
} );
