const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(`Incoming request to: ${req.url}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!');
  res.end();
  console.log(`Status ${res.statusMessage}`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
