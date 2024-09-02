const fs = require('fs');

// Reading the contents of the current directory
fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:');
    files.forEach(file => {
        console.log(file);
    });
});
