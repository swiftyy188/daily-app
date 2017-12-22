var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Deal = require('../models/Deal.js')

// import the required dependencies for Json web token
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://jeffho.auth0.com/.well-known/jwks.json"
    }),
    audience: 'localhost3000',
    issuer: "https://jeffho.auth0.com/",
    algorithms: ['RS256']
});


router.get('/', jwtCheck, function(req, res, next){
	Deal.find(function(err, deals){
		if(err) return next(err);
		res.json(deals);
	});
});

router.post('/', function(req, res,next){
	Deal.create(req.body, function(err, deal){
		if(err) return next(err);
		res.json(deal);
	});
});

module.exports = router;


