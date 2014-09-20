
/*
 * GET home page.
 */

exports.pull = function(req, res){
	console.log('I had a request. OMG!');
	console.log(req.body.payload);
	res.json({
		awesome: "IS HAPPENEING"
	})
};