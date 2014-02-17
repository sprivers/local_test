var http  	= require('http');
var counter = 0;

var server = http.createServer(function(req, res) {
	counter++;
	res.write('Accessed ' + counter + ' times');
	res.end();
});

server.listen(3003, function() {
	console.log("listening on port 3003...");
});