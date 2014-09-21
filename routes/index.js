//Some required libs
var exec = require('child_process').exec
	, whoAmI
	, runGitPull
	;

/*
 * GET home page.
 */

exports.pull = function(req, res){
	console.log('I had a request. OMG!');
	console.log(req.body.payload);

	whoAmI = exec('whoami', {cdw:"/opt/project-maynard"}, function(error, stdout, stderr){
		console.log("I am: ", stdout);
	});

	runGitPull = exec('git pull', {cwd:"/opt/project-maynard"}, function(error, stdout, stderr){
		console.log("Error: ", error);
		console.log("Output:", stdout);
	});

	res.json({
		awesome: "IS HAPPENEING"
	})
};