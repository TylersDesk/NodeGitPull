
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var app = express();

// all environments
app.set('port', process.env.PORT || 3033);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//if there is a POST to / (the root server) do some stuff
app.post('/', routes.pull);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Thank you for using NodeGitPull');
  console.log('Very simple GIT-HOOK listener on port ' + app.get('port'));
});
