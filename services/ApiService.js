const request = require( "request" );

class ApiService {
  constructor ( api ) {
    this._api = undefined;
    this.setApi( api );
  }

  getApi () {
    return this._api;
  }

  setApi ( api ) {
    this._api = api;
  }

  async makeRequest ( options ) {
    return new Promise( (resolve, reject ) => {
      request(options, ( err, response, body ) => {
        if ( err ) {
          return reject( err );
        }
        const parsedBody = JSON.parse( body );
        return resolve( parsedBody );
      } );
    } );
  }
}

module.exports = ApiService;
