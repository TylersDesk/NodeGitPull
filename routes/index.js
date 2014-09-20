//Some required libs
var spawn = require('child_process').spawn;


/*
 * GET home page.
 */

exports.pull = function(req, res){
	console.log('I had a request. OMG!');
	console.log(req.body.payload);

	var runGitPull = spawn('ls', [], {
		cwd: '/opt/project-maynard'
	});

	runGitPull.stdout.on('data', function(data) {
		console.log('LS returns:', + data);
	});

	runGitPull.stderr.on('data', function(data) {
		console.log('stderr:', + data);
	});

	runGitPull.on('close', function(code) {
		console.log('Child Process exetid with code: ', + code);
	});

	res.json({
		awesome: "IS HAPPENEING"
	})
};