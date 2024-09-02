const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'sampledata.json'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }

            // Parse the JSON data
            const jsonData = JSON.parse(data);

            // Create HTML content
            let htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>JSON Data</title>
            </head>
            <body>
                <h1>Data from sampledata.json</h1>
            `;

            // Add data to HTML content
            jsonData.forEach((item) => {
                htmlContent += `
                <div>
                    <h2>Name: ${item.name}</h2>
                    <p>Age: ${item.age}</p>
                    <p>Company: ${item.company}</p>
                    <p>Address: ${item.address}</p>
                </div>
                <hr>
                `;
            });

            htmlContent += `
            </body>
            </html>
            `;

            // Send the HTML response
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlContent);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
