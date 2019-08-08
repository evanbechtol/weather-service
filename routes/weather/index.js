const express = require( 'express' );
const router = express.Router();

router.get( '/weather', ( req, res ) => {
  res.send( { message : 'Hello from weather!' } );
} );

router.get( '/forecast', ( req, res ) => {
  res.send( { message : 'Hello from forecast!' } );
} );

module.exports = router;
