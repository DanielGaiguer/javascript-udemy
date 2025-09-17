const { cpfs } = require('./base')

console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));
