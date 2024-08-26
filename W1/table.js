var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});  // Set Content-Type to text/html
    
    // Define the HTML content with a table
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple HTML Table</title>
        <style>
            table { 
                width: 50%; 
                border-collapse: collapse; 
                margin: 20px auto; 
                font-family: Arial, sans-serif; 
            }
            table, th, td { 
                border: 1px solid black; 
            }
            th, td { 
                padding: 10px; 
                text-align: left; 
            }
            th { 
                background-color: #f2f2f2; 
            }
        </style>
    </head>
    <body>
        <h2 style="text-align:center;">Contact Information</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
            <tr>
                <td>Matti Meikäläinen</td>
                <td>Timotie 1, as 10</td>
                <td>Tampere</td>
            </tr>
            <tr>
                <td>Maija Virtanen</td>
                <td>Asematie 12</td>
                <td>Kiljava</td>
            </tr>
        </table>
    </body>
    </html>
    `;

    res.end(htmlContent);  // Send the HTML content as a response
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
