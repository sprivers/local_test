var http = require('http');

var server = http.createServer(function(req, res){
	switch(req.method)
	{
		case 'GET':
			show(res);
		break;

		case 'POST':
			upload(req, res);
		break;
	}
});

function show(res) {
	// show form
}

function upload(req, res) {
	// upload logic
}



server.listen(3003, function() {
	console.log("Server listening on 3003");
});