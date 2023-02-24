const http = require('http')
const url = require('url')

const server = http.createServer()

server.on('request', (req, res) => {
  // res.end(JSON.stringify({
  //   name: 'chy',
  //   age: 100
  // }))

  let urlobj = url.parse(req.url, true)
  // console.log(urlobj.query.callback);

  res.writeHead(200,{
    "Content-Type":"application/json;charset=utf-8",
    //cors头
    "access-control-allow-origin":"*"
  })

  switch (urlobj.pathname) {
    case '/api/aaa':
      res.end(`${JSON.stringify({
        name: 'chy',
        age: 20
      })}`)
      break
    default:
      res.end('404')
  }
})

server.listen(3000, () => {
  console.log("服务器开启");
})