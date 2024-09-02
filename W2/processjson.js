const fs = require('fs');

// Read the JSON file
fs.readFile('sampledata.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Task a: Display name, age, company, and address on the console
    console.log('Task a: Displaying name, age, company, and address\n');
    jsonData.forEach((item) => {
        console.log(`Name: ${item.name}`);
        console.log(`Age: ${item.age}`);
        console.log(`Company: ${item.company}`);
        console.log(`Address: ${item.address}`);
        console.log('----------------------------------');
    });

    // Task b: Display the same information but surround it with HTML tags
    console.log('\nTask b: Displaying data with HTML tags\n');
    jsonData.forEach((item) => {
        console.log(`<div>`);
        console.log(`  <h2>Name: ${item.name}</h2>`);
        console.log(`  <p>Age: ${item.age}</p>`);
        console.log(`  <p>Company: ${item.company}</p>`);
        console.log(`  <p>Address: ${item.address}</p>`);
        console.log(`</div>`);
        console.log('----------------------------------');
    });
});
