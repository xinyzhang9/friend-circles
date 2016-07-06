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
					source:req.body.id1,
					target:req.body.id2,
					created_at:Date(),
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
		remove:function(req,res){
			// Edge.remove({source:req.body.id1},function(err,status){
			// 	if(err){
			// 		console.log(err);
			// 	}else{
			// 		console.log('remove edges successfully');
			// 		res.json({"status":'successful'});
			// 	}
			// })
			Edge.find().or([
		          { $and: [{source: req.body.id1}, {target: req.body.id2}] },
		          { $and: [{source: req.body.id2}, {target: req.body.id1}] }
		      ]).remove(function(err,output){
		      	if(err){
		      		console.err(err);
		      	}else{
		      		res.json(output);
		      	};
		      });
		},
	}
})()