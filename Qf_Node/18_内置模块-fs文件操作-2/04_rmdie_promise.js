const fs = require('fs').promises

fs.readdir('./mydir').then(async (data) => {
  // let arr = []
  // data.forEach(item => {
  //   arr.push(fs.unlink(`./mydir/${item}`))
  // })

  // await Promise.all(arr)
  await Promise.all(data.map(item => fs.unlink(`./mydir/${item}`)))
  await fs.rmdir('./mydir')
})