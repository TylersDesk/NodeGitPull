//Some required libs
var exec = require('child_process').exec
	, runGitPull
	;

/*
 * GET home page.
 */

exports.pull = function(req, res){
	console.log('I had a request. OMG!');
	console.log(req.body.payload);

	runGitPull = exec('git pull', {cwd:"/opt/project-maynard"}, function(error, stdout, stderr){
		console.log("Error: ", error);
		console.log("Output:", stdout);
	});

	res.json({
		awesome: "IS HAPPENEING"
	})
};