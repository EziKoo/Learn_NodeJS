const fs = require('fs')

//error-first

fs.readFile('./mydir/test.txt', "utf-8", (err, data) => {
  if (!err) {
    // console.log(data.toString("utf8"));
    console.log(data);
  }
})