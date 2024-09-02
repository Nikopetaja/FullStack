const fs = require('fs');

// Deleting the file created in step 4
fs.unlink('combined.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File combined.txt has been deleted.');
});
