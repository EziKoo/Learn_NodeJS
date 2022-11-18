const fs = require('fs')

fs.rename('./img', './renameImg', (err) => {
  if (err && err.code === 'ENOENT') {
    console.log("目录不存在");
  }
})