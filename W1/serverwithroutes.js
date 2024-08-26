var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var pathname = q.pathname;

    if (pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Home Page</h1>\n');
        res.end('<p>Welcome to the Home Page!</p>\n');
    } else if (pathname === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>\n');
        res.end('<p>This is a simple Node.js web server demonstrating routing.</p>\n');
    } else if (pathname === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Contact Page</h1>\n');
        res.end(`
            <table>
                <tr><th>Name</th><th>Address</th><th>City</th></tr>
                <tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>
                <tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>
            </table>
        `);
    } else {
        // For all other routes, return a 404 response
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>\n');
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
