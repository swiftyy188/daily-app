var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Deal = require('../models/Deal.js')

// Check if server works
router.get('/', function(req, res, next){
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

