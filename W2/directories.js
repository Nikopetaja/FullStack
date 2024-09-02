const fs = require('fs');

// Creating a new directory and writing a file there
fs.mkdir('newdata', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory newdata created.');

    // Writing the file in the new directory
    fs.writeFile('newdata/combined.txt', 'This is some combined content', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File combined.txt has been written in newdata directory.');

        // Removing the directory after a delay to ensure the file is written
        setTimeout(() => {
            fs.unlink('newdata/combined.txt', (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }

                fs.rmdir('newdata', (err) => {
                    if (err) {
                        console.error('Error removing directory:', err);
                        return;
                    }
                    console.log('Directory newdata removed.');
                });
            });
        }, 1000);  // Delay to ensure the file operation is complete
    });
});
