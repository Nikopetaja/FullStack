const fs = require('fs');

// Reading the first text file
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        console.error('Error reading file1:', err);
        return;
    }
    console.log('Contents of file1.txt:');
    console.log(data1);

    // Reading the second text file
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error('Error reading file2:', err);
            return;
        }
        console.log('Contents of file2.txt:');
        console.log(data2);
    });
});
