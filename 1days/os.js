const os = require('os');

console.log('운영체제 정보------------------');
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.tmpdir());
console.log(os.release());
console.log(os.type());
console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());