const chai = require( "chai" );
const assert = chai.assert;
const expect = chai.expect;
const mocha = require( "mocha" );
const describe = mocha.describe;
const it = mocha.it;

describe( "Weather Service", () => {
  const WeatherService = require( "../services/WeatherService" );
  const WeatherServiceInstance = new WeatherService();

  it( "Should initialize an instance of the weather service", () => {
    expect( WeatherServiceInstance ).to.be.an.instanceOf( WeatherService );
  } );

  describe( "Check methods", () => {

    describe( "Method getWeather", () => {

      it( "Should have method", () => {
        expect( WeatherServiceInstance ).itself.to.respondTo( "getWeather" );
      } );

      it( "Should return an object", () => {

      } );
    } );
  } );

} );
