//-------------------------------------------------------------
//timetrack.js

var qs = require('querystring');


exports.sendHtml = function(res, html) {
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLenght(html));
	res.end(html);
};

exports.parseReceivedData = function(req, callback) {
	var body = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk) { body += chunk });
	req.on('end', function() {
		var data = qs.parse(body);
		callback(data);
	});
};

exports.actionForm = function(id, path, label) {
	var html = '<form method="POST" action="' + path + '">'
			 + '<input type="hidden" name="id" value="' + id + '">'
			 + '<input type="submit" value="' + label + '">'
			 + '</form>'
	return html;
};

exports.add = function(db, req, res) {

};