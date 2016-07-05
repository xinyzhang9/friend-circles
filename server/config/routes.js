var nodes = require('./../controllers/nodes.js');
var edges = require('./../controllers/edges.js');

module.exports = function(app){
	app.get('/nodes',function(req,res){
		nodes.index(req,res);
	});
	app.get('/nodes/:id',function(req,res){
		nodes.getNodeById(req,res);
	});
	app.post('/addNode/:name',function(req,res){
		nodes.add(req,res);
	});
	app.post('/removeNode/:id',function(req,res){
		nodes.remove(req,res);
	});

	app.get('/edges',function(req,res){
		edges.index(req,res);
	});
	app.get('/edges/:id',function(req,res){
		edges.getEdgesById(req,res);
	});
	app.post('/edges',function(req,res){
		edges.add(req,res);
	});
	app.post('/removeEdgeById/:id',function(req,res){
		edges.removeEdgeById(req,res);
	});
	app.post('/connect',function(req,res){
		nodes.connect(req,res);
	});
	app.get('/getNodeById/:id',function(req,res){
		nodes.getNodeById(req,res);
	})
}