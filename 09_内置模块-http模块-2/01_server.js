var moduleRenderHTML = require('./module/renderHTML')
var moduleRenderStatus = require('./module/renderStatus')

var http = require('http')

// 第一种写法
// // 创建服务器
// http.createServer((req,res) => {
//   // 接收浏览器传的参数，然后返回渲染的内容
//   // req 接收浏览器传的参数
//   // res 返回渲染的内容
//   console.log(req.url);
//   res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
//   // res.write('hello world1111<br>')
//   // res.write('hello world2222<br>')
//   // res.write('hello world3333<br>')
//   // res.end('[12,34]')
//   res.write(moduleRenderHTML.renderHTML(req.url))
// }).listen(3000,() => {
//   console.log('server start');
// })

// 第二种写法
var server = http.createServer()

server.on("request",(req,res) => {
  res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
  res.write(moduleRenderHTML.renderHTML(req.url))
  res.end()
})

server.listen(3000,() => {
  console.log('服务器已开启');
})