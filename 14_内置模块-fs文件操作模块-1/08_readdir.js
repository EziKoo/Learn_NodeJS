const fs = require('fs')

fs.readdir('./mydir', (err, data) => {
  if (!err) {
    console.log(data);
  }
})