//model
var mongoose = require('mongoose');

var NodeSchema = new mongoose.Schema({
	name:String,
	gender: {type:String, default:"f"},
	created_at:Date,
	friends: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'nodes'
  }],
});

mongoose.model('nodes',NodeSchema);