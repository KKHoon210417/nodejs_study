// Hell Callback Logic
const fs = require('fs');

fs.readFile('./read.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(1, data.toString());
    fs.readFile('./read.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(2, data.toString());
        fs.readFile('./read.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log(3, data.toString());
        });
    });
});



