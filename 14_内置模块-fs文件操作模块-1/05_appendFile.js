const fs = require('fs')

fs.appendFile('./mydir/test.txt', "\n哈哈哈哈", (err) => {
  console.log(err);
})

