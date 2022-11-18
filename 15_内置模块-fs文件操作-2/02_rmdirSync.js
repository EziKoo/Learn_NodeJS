const fs = require('fs')

fs.readdir('./mydir', (err, data) => {
  data.forEach(item => {
    fs.unlinkSync(`./mydir/${item}`,(err)=>{})
  })

  fs.rmdir('./mydir',err=>{
    console.log(err);
  })
})
