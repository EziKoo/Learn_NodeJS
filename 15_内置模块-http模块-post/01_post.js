const http = require('http')
const https = require('https')
const url = require('url')

http.createServer((req, res) => {
  //利用cors方式解决跨域问题
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    "access-control-allow-origin": "*"
  })

  const urlobj = url.parse(req.url, true)

  switch (urlobj.pathname) {
    case "/api/aaa":
      //客户端 去小米优品要数据
      httppost((data) => {
        res.end(data)
      })
      break
    default:
      res.end('404')
  }

}).listen(3000, () => {
  console.log("服务器已开启");
})

function httppost(cb) {
  let data = ""
  const options = {
    hostname: 'm.xiaomiyoupin.com',
    port: 443,
    path: '/mtop/market/search/placeHolder',
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    }
  }
  const req = https.request(options, (res) => {
    res.on('data', chunk => {
      data += chunk
    })
    res.on('end', () => {
      cb(data)
    })
  })

  req.write(JSON.stringify([{}, {"baseParam": {"ypClient": 1}}]))
  req.end()
}