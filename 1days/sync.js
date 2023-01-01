const fs = require('fs');

let data = fs.readFileSync('./read.txt');
console.log(1, data.toString());
data = fs.readFileSync('./read.txt');
console.log(2, data.toString());
data = fs.readFileSync('./read.txt');
console.log(3, data.toString());
data = fs.readFileSync('./read.txt');
console.log(4, data.toString());
