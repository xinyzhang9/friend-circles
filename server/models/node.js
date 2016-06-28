//model
var mongoose = require('mongoose');

var NodeSchema = new mongoose.Schema({
	name:String,
	color: String,
	created_at:Date,
	friends: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'nodes'
  }],
});

mongoose.model('nodes',NodeSchema);