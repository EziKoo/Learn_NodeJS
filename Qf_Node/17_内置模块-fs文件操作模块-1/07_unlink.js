const fs = require('fs')

fs.unlink('./mydir/test.txt', err => {
  console.log(err);
})