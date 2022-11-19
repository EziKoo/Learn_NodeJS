const fs = require('fs')

const ws = fs.createWriteStream('./2.txt', 'utf-8')

ws.write("11111")
ws.write("哈哈哈")
ws.write("呵呵呵")
ws.write("22222")

ws.end()