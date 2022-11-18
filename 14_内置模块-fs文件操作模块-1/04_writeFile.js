const fs = require('fs')

fs.writeFile('./mydir/test.txt', "hello 你好",err=>{
  console.log(err);
})