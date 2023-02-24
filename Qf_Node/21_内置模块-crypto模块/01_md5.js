const crypto = require('crypto')

// const hash = crypto.createHash("md5")
const hash = crypto.createHash("sha1")

hash.update("hello world")
hash.update("chyhahahha")

// console.log(hash.digest("hex"));
console.log(hash.digest("base64"));