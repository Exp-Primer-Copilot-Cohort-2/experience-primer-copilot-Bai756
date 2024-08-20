// Create web server
// Usage: node 02_web_server.js

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World</h1>');
}).listen(8000);

console.log('Server running at http://localhost:8000/');