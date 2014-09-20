
/*
 * GET home page.
 */

exports.pull = function(req, res){
	console.log('I had a request. OMG!');
	console.log(req.params);
	res.json({
		awesome: "IS HAPPENEING"
	})
};