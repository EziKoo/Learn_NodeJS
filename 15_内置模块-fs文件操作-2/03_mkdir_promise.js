const fs = require('fs').promises

// fs.mkdir('./mydir').then(data => {
//   console.log(data);
// })


fs.readFile('./mydir/aa.txt','utf8').then(data => {
  console.log(data);
})