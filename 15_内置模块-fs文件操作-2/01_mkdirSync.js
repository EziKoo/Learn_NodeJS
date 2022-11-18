const fs = require('fs')

try{
  fs.mkdirSync('./mydir')
} catch (error) {
  console.log(error);
}


//阻塞后面代码执行