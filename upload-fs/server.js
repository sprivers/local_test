var http 		= require('http');
var formidable	= require('formidable');

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
	var html = '<html><title>Upload Server</title><body>'
			 + '<form method="post" action="/" enctype="multipart/form-data">'
			 + '<p><input type="text" name="name" /></p>'
			 + '<p><input type="file" name="file" /></p>'
			 + '<p><input type="submit" value="Upload" /></p>'
			 + '</form>'
			 + '</body></html>';

	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);		 
}

function upload(req, res) {
	// upload logic
	if (!isFormData(req)) {
		res.statusCode = 400;
		res.end('Bad Request Type');
		return;
	}

	var form = formidable.IncomingForm();

	form.on('field', function(field, value) {
		console.log(field);
		console.log(value);
	});


	form.on('file', function(name, file) {
		console.log(name);
		console.log(file);
	});

	form.on('end', function() {
		res.end('Upload Complete!\n');
	});

	form.parse(req);
}

function isFormData(req) {
	var type = req.headers['content-type'] || '';
	return 0 == type.indexOf('multipart/form-data');
}



server.listen(3003, function() {
	console.log("Server listening on 3003");
});