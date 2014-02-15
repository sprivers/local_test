var http  = require('http');
var url   = require('url');
var items = [];


var server = http.createServer(function(req, res){

	if ('/' == req.url) {

		switch(req.method) {
			
			case 'GET':
				show(res);			
				break;
			
			case 'POST':
				addNew(req, res)
				break;
			
			default:
				badRequest(res);
		}

	} else {
	
		notFound(res);
	
	}

});

server.listen(3000, function() {
  console.log("Server listening on port 3000.");
});

function show(res) {

}

function addNew(req, res) {

}

function badRequest(res) {

}

function notFound(res) {
	
}

