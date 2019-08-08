const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;
const config = require( "../../config" );

describe( "Method getWeather", () => {
  const WeatherService = require( "../../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );
  const Params = {
    latAndLon: "lat=32.8998&lon=-96.80667",
    zipAndCountryCode: "zip=75023,us"
  };

  it( "Should have method", () => {
    assert.isFunction( WeatherServiceInstance.getWeather );
  } );

  describe( "Using lat and lon", () => {
    testGetWeather( WeatherServiceInstance, Params.latAndLon );
  } );

  describe( "Using zip and country code", () => {
    testGetWeather( WeatherServiceInstance, Params.zipAndCountryCode );
  } );
} );

function testGetWeather ( WeatherServiceInstance, params ) {
  let weatherResponse;

  it( "Should return an object", async () => {
    weatherResponse = await WeatherServiceInstance.getWeather( params );
    assert.isObject( weatherResponse );
  } );

  describe( "Response should have keys", () => {
    describe( "coord", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "coord" );
      } );

      it( "Is object", () => {
        assert.isObject( weatherResponse.coord );
      } );
    } );

    describe( "weather", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "weather" );
      } );

      it( "Is array", () => {
        assert.isArray( weatherResponse.weather );
      } );
    } );

    describe( "main", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "main" );
      } );

      it( "Is object", () => {
        assert.isObject( weatherResponse.main );
      } );
    } );

    describe( "wind", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "wind" );
      } );

      it( "Is object", () => {
        assert.isObject( weatherResponse.wind );
      } );
    } );


    describe( "clouds", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "clouds" );
      } );

      it( "Is object", () => {
        assert.isObject( weatherResponse.clouds );
      } );
    } );

    describe( "dt", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "dt" );
      } );

      it( "Is number", () => {
        assert.isNumber( weatherResponse.dt );
      } );
    } );

    describe( "sys", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "sys" );
      } );

      it( "Is object", () => {
        assert.isObject( weatherResponse.sys );
      } );
    } );

    describe( "name", () => {
      it( "Key exists", () => {
        assert.property( weatherResponse, "name" );
      } );

      it( "Is string", () => {
        assert.isString( weatherResponse.name );
      } );
    } );
  } );
}
