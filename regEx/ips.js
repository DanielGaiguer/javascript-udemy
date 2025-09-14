const { ips } = require('./base')

//const ip = `252.255.255.255`

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

console.log(ips.match(ipRegExp))
//console.log(ips.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)) -> Forma que eu fiz

