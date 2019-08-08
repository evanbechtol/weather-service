module.exports = {
  checkForParams
};

function checkForParams( req, res, next ) {
  if ( req.query.lat && req.query.lon ) {
    req.weatherParams = `lat=${req.query.lat}&lon=${req.query.lon}`;
  } else if ( req.query.zip ) {
    req.weatherParams = `zip=${req.query.zip}`;
  } else {
    const InvalidParams = "Invalid request, lat and long, or zip code and" +
      " country code not provided";
    return res.status( 400 ).send( { cod: 400, message: InvalidParams } );
  }

  next();
}
