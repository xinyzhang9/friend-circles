//model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EdgeSchema = new mongoose.Schema({
	source : { type: Schema.ObjectId },
	target : { type: Schema.ObjectId },
	created_at : Date,
});

mongoose.model('edges',EdgeSchema);