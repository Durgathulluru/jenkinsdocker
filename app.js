// This is a simple Node.js application that starts a server and listens on port 8080 for connections. 
// The app responds with “Hello World!” for requests to the root URL (/) or route.

const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

