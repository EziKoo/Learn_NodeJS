const fs = require('fs')

fs.stat('./mydir', (err, data) => {
  console.log(data.isFile());
  console.log(data.isDirectory());
})