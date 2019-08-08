const ApiService = require( "./ApiService" );

class WeatherService extends ApiService {
  constructor ( weatherApi, apiKey ) {
    super( weatherApi );
    this.apiKey = apiKey;
  }

  /**
   * @description Retrieve the weather for the latitude and longitude provided
   * @param latitude {string} Latitude in range of -90 to 90
   * @param longitude {string} Longitude in range of -180 to 180
   */
  async getWeather ( latitude, longitude ) {
    //Todo: Check that provided lat and long are numbers
    //Todo: Check that provided lat and long are in acceptable ranges
    const requestOptions = {
      url: `https://${this.getApi()}/weather?lat=${latitude}&lon=${longitude}&APPID=${this.apiKey}`,
      method: "GET"
    };
    return await this.makeRequest( requestOptions );
  }
}

module.exports = WeatherService;
