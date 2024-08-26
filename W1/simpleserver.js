var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello There</h1>\n');
    res.end('<p>Hello world</p>\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');