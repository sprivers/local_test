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

	var html = '<html><head><title>Todo App</title></head><body>'
			 + '<h1>Todo List</h1>'
			 + '<ul>'
			 + items.map(function(item) {
			 		return '<li>' + item + '</li>'
			 	}).join('')
			 + '</ul>'
			 + '<form method="post" action="/">'
			 + '<p><input type="text" name="item" /></p>'
			 + '<p><input type="submit" value="Add Item" /></p>'
			 + '</form></body></html>';
			 
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

function addNew(req, res) {

}

function badRequest(res) {

}

function notFound(res) {

}

