const http = require('http')
const https = require('https')
const url = require('url')
const eventEmitter = require('events')

let event = null

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    //cors头
    "access-control-allow-origin": "*"
  })

  let urlobj = url.parse(req.url, true)

  switch (urlobj.pathname) {
    case "/api/aaa":
      //客户端 去猫眼要数据
      // httpget((data)=>{
      //   res.end(data)
      // })

      event = new eventEmitter()
      event.on("play", (data) => {
        console.log(data);
        res.end(data)
      })

      break
    default:
      res.end('404')
  }

}).listen(3000, () => {
  console.log("服务器开启");
})

function httpget(cb) {
  let data = ""
  https.get("https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E6%98%8C&ci=83&channelId=4", (res) => {
    res.on("data", (chunk) => {
      data += chunk
    })
    res.on("end", () => {
      // console.log(data);
      // cb(data)

      event.emit("play", data)
    })
  })

}