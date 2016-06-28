var mongoose = require('mongoose');
var Node = mongoose.model('nodes');
module.exports = (function(){
	return{
		index:function(req,res){
			Node.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		getNodeById:function(req,res){
			Node.findOne({_id:req.params.id},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var node = new Node({name:req.params.name,created_at:Date()});
			node.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add node successfully');
					res.json(output);
				}
			})
		},
		remove:function(req,res){
			Node.remove({_id:req.params.id},function(err,status){
				if(err){
					console.log(err);
				}else{
					console.log('remove node successfully');
					res.json({"status":'successful'});
				}
			})
		}
	}
})()