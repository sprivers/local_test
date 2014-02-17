var fs   = require('fs');
var path = require('path');
var args = process.argv.splice(2);
var cmd  = args.shift();
var task = args.join(' ');
var file = path.join(process.cwd(), '/.tasks');


switch(cmd) {
	case 'list':
		listTasks(file);
		break;
	case 'add':
		addTask(file, task);
		break;

	default:
		console.log('Usage: ' + process.argv[0] +
			' list|add [task description]');
}

function listTasks(file) {
	loadOrInitTasks(file, function(tasks) {
		for (var i in tasks) {
			console.log(tasks[i]);
		}
	});
}

function storeTasks(file, tasks) {
	fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
		if (err) throw err;
		console.log('Saved.');
	});
}


function addTask(file, taskDescription) {
	loadOrInitTasks(file, function(tasks) {
		tasks.push(taskDescription);
		storeTasks(file, tasks);
	});
}


function loadOrInitTasks(file, cb) {
	fs.exists(file, function(exists) {
		
		if (exists) {
			fs.readFile(file, 'utf8', function(err, data) {
				if (err) throw err;
				var jsonData = data.toString();
				var tasks 	 = JSON.parse(jsonData || '[]');
				cb(tasks);
			});
		} else {
			cb([]);
		}

	});
}

