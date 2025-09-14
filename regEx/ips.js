const { ips } = require('./base')

console.log(ips.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g))