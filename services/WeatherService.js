const ApiService = require( "./ApiService" );

class WeatherService extends ApiService {
  constructor ( weatherApi, apiKey ) {
    super( weatherApi );
    this.apiKey = apiKey;
  }

  /**
   * @description Retrieve the weather for the latitude and longitude provided
   * @param params {string} Querystring parameters to pass to API; lat &
   * lon, zip code
   */
  async getWeather ( params ) {
    const RequestOptions = {
      url: `https://${this.getApi()}/weather?${params}&APPID=${this.apiKey}`,
      method: "GET"
    };
    return await this.makeRequest( RequestOptions );
  }

  /**
   * @description Retrieve the forecast for the latitude and longitude provided
   * @param params {string} Querystring parameters to pass to API; lat &
   * lon, zip code
   */
  async getForecast ( params ) {
    const RequestOptions = {
      url: `https://${this.getApi()}/forecast?${params}&APPID=${this.apiKey}`,
      method: "GET"
    };
    return await this.makeRequest( RequestOptions );
  }
}

module.exports = WeatherService;
