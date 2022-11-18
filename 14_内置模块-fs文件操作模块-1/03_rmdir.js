const fs = require('fs')

fs.rmdir('./renameImg', (err) => {
  if (err && err.code === 'ENOENT') {
    console.log("目录不存在");
  }
})