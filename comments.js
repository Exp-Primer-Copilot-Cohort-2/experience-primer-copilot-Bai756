// Create a web server
// The server should listen on port 3000
// The server should respond to a GET request to '/hello' with a web page that says "Hello, World!"
// The server should respond to a GET request to '/goodbye' with a web page that says "Goodbye, World!"

// Import the http module
var http = require('http');
// Import the url module
var url = require('url');

// Create a server
var server = http.createServer(function (req, res) {
  // Parse the request URL
  var parsedUrl = url.parse(req.url, true);

  // Check the path of the URL
  if (parsedUrl.pathname === '/hello') {
    // Send a response with the text "Hello, World!"
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
  } else if (parsedUrl.pathname === '/goodbye') {
    // Send a response with the text "Goodbye, World!"
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Goodbye, World!</h1>');
  } else {
    // Send a response with the text "Not Found"
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  }
});

// Start the server
server.listen(3000, function () {
  console.log('Server is listening on port 3000');
});