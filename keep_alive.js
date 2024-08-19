var http = require('http');

http.createServer(function (req, res) {
  res.write("俺は地球や!");
  res.end();
}).listen(8080);
