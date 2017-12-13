var mongoose = require('mongoose');
var DealSchema = new mongoose.Schema({
	name: String,
	description: String,
	original_price: Number,
	sale_price: Number,
});

module.exports = mongoose.model('Deal', DealSchema);