const fs = require('fs');

// Step 1: Read the sample JSON data into a variable
fs.readFile('sampledata.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the JSON data
    let jsonData = JSON.parse(data);

    // Output the data to the console
    console.log('Original JSON data:');
    console.log(jsonData);

// Create a new item to add to the JSON data
const newItem = {
    "_id": "56a9f260newitem123",
    "index": 7,
    "guid": "new-guid-1234",
    "isActive": true,
    "balance": "$4,000.00",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": "New User",
    "gender": "female",
    "company": "NEWCOMPANY",
    "email": "newuser@newcompany.com",
    "phone": "+1 (999) 999-9999",
    "address": "123 New Street, New City, NY, 10001",
    "about": "This is a newly added user for testing purposes."
};

// Step 2: Add the new item to the JSON data
jsonData.push(newItem);

// Output the updated JSON data to the console
console.log('\nUpdated JSON data with new item:');
console.log(jsonData);

// Step 2 (Continued): Write the updated JSON data to a new file
fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('\nNew item added and saved to dataset.json');
});


// Step 3: Delete one item from the JSON data (e.g., delete the item with index 1)
const itemToDeleteIndex = jsonData.findIndex(item => item.index === 1);
if (itemToDeleteIndex !== -1) {
    jsonData.splice(itemToDeleteIndex, 1);
}

// Output the JSON data after deletion
console.log('\nJSON data after deletion:');
console.log(jsonData);

// Step 3 (Continued): Write the updated JSON data to a new file
fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('\nItem deleted and changes saved to dataset.json');
});

const http = require('http');

// Step 4: Serve the JSON data as plain text in the web browser
const server = http.createServer((req, res) => {
    if (req.url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(jsonData, null, 2));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
});