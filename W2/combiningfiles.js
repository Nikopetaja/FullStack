const fs = require('fs');

// Reading both files
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        console.error('Error reading file1:', err);
        return;
    }
    
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error('Error reading file2:', err);
            return;
        }
        
        // Combining contents of both files
        const combinedData = 'I wrote this!\n' + data1 + '\n' + data2 + '\nI wrote this!';

        // Writing the combined data to a new file
        fs.writeFile('combined.txt', combinedData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File combined.txt has been written.');
        });
    });
});
