var mongoose = require('mongoose');
var Edge = mongoose.model('edges');
module.exports = (function(){
	return{
		index:function(req,res){
			Edge.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		getEdgesById:function(req,res){
			Edge.findOne({_id:req.params.id},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var edge = new Edge(
				{	
					source:req.body.source,
					target:req.body.target,
					created_at:Date()
				});
			edge.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add edge successfully');
					res.json(output);
				}
			})
		},
		removeEdgeById:function(req,res){
			Edge.remove({source:req.body.id},function(err,status){
				if(err){
					console.log(err);
				}else{
					console.log('remove edges successfully');
					res.json({"status":'successful'});
				}
			})
		},
	}
})()