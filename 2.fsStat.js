const fw = require('node:fs');

const stats = fw.statSync('./archivo.txt'); 

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
);