const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Length header,
  // the response may be incomplete or cause issues depending on the client.
  res.write('Hello, world!');
  // Missing res.end() to signal the end of the response.
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});