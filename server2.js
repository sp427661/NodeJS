var http = require('http');

var hostname = 'localhost';
var port ='3000';

var server = http.createServer(function(req,res)
{
  if(req.url== '/')
  {
      res.write('Hello World...!!');
      res.end();

  }

  if(req.url=='/api/courses')
  {
       res.write('working in url');
       res.end();
  }

});

server.listen(port);

console.log('server is running on http://localhost:3000');