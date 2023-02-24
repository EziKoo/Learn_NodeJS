const fs = require('fs')

fs.mkdir('./mydir', (err) => {
  // console.log(err);
  if (err && err.code === 'EEXIST') {
    console.log("目录已存在");
  }
})