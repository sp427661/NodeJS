var http = require('http');

var hostname = 'localhost';
var port ='3000';

var server = http.createServer(function(req,res)
{
   console.log(req.headers);

   res.statusCode ='200';
   res.setHeader =  {'Content-Type': 'text/plain'};
   res.end('Hello world');

});

server.listen(port);

console.log('server is running on http://localhost:3000');