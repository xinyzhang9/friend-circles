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
		getNodeByName:function(req,res){
			Node.findOne({name:req.params.name},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var node = new Node({name:req.body.name,gender:req.body.gender,created_at:Date()});
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
		},
		connect:function(req,res){
			Node.findOne({_id:req.body.id1},function(err,node){
				var dup = false;
				for(var i = 0; i < node.friends.length; i++){
					if(node.friends[i] == req.body.id2){
						dup = true;
						break;
					}
				}
				if(!dup){
					node.friends.push(req.body.id2);
				}
				node.save(function(err,output){
					if(err){
						console.log(err);
					}else{
						console.log('node connect successfully');
						res.json(output);
					}
				})

			})
		},
		disconnect:function(req,res){
			Node.findOne({_id:req.body.id1},function(err,node){

				var c = node.friends.indexOf(req.body.id2);
				node.friends.splice(c,1);
				node.save(function(err,output){
					if(err){
						console.log(err);
					}else{
						console.log('node connect successfully');
						res.json(output);
					}
				})

			})
		},
		edit:function(req,res){
			Node.findOne({_id:req.body.id},function(err,node){
				node.name = req.body.name;
				node.save(function(err,output){
					if(err){
						console.log(err);
					}else{
						console.log('node edit successfully');
						res.json(output);
					}
				})

			})
		},
	}
})()