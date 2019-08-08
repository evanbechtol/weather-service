const assert = require( "chai" ).assert;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;
const config = require( "../../config" );

describe( "Method getForecast", () => {
  const WeatherService = require( "../../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService( config.weatherApi, config.weatherApiKey );
  const Params = {
    latAndLon: "lat=32.8998&lon=-96.80667",
    zipAndCountryCode: "zip=75023,us"
  };

  it( "Should have method", () => {
    assert.isFunction( WeatherServiceInstance.getForecast );
  } );

  describe( "Using lat and lon", () => {
    testGetForecast( WeatherServiceInstance, Params.latAndLon );
  } );

  describe( "Using zip and country code", () => {
    testGetForecast( WeatherServiceInstance, Params.zipAndCountryCode );
  } );
} );

function testGetForecast ( WeatherServiceInstance, params ) {
  let forecastListElement;
  let forecastResponse;

  it( "Should return an object", async () => {
    forecastResponse = await WeatherServiceInstance.getForecast( params );
    assert.isObject( forecastResponse );
  } );

  describe( "Response should have keys", () => {

    describe( "list", () => {
      it( "Key exists", () => {
        assert.property( forecastResponse, "list" );
      } );

      it( "Is array", () => {
        assert.isArray( forecastResponse.list );
        forecastListElement = forecastResponse.list[ 0 ];
      } );
    } );

    describe( "city", () => {
      it( "Key exists", () => {
        assert.property( forecastResponse, "city" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastResponse.city );
      } );
    } );

    describe( "coord", () => {
      it( "Key exists", () => {
        assert.property( forecastResponse.city, "coord" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastResponse.city.coord );
      } );
    } );

    describe( "weather", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "weather" );
      } );

      it( "Is array", () => {
        assert.isArray( forecastListElement.weather );
      } );
    } );

    describe( "main", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "main" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastListElement.main );
      } );
    } );

    describe( "wind", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "wind" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastListElement.wind );
      } );
    } );

    describe( "clouds", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "clouds" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastListElement.clouds );
      } );
    } );

    describe( "dt", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "dt" );
      } );

      it( "Is number", () => {
        assert.isNumber( forecastListElement.dt );
      } );
    } );

    describe( "sys", () => {
      it( "Key exists", () => {
        assert.property( forecastListElement, "sys" );
      } );

      it( "Is object", () => {
        assert.isObject( forecastListElement.sys );
      } );
    } );

    describe( "name", () => {
      it( "Key exists", () => {
        assert.property( forecastResponse.city, "name" );
      } );

      it( "Is string", () => {
        assert.isString( forecastResponse.city.name );
      } );
    } );
  } );
}
