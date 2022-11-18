var http = require('http')
var url = require('url')

var moduleRenderHTML = require('./module/renderHTML')
var moduleRenderStatus = require('./module/renderStatus')


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
  // console.log(url.parse(req.url).pathname);
  var urlObj = url.parse(req.url,true)
  console.log(urlObj.query.name,urlObj.query.age);
  var pathname = url.parse(req.url).pathname
  res.writeHead(moduleRenderStatus.renderStatus(pathname),{"Content-Type":"text/html;charset=utf-8"})
  res.write(moduleRenderHTML.renderHTML(pathname))
  res.end()
})

server.listen(3000,() => {
  console.log('服务器已开启');
})

// 通过一个请求地址解析成一个对象
// const urlString = 'https://www.baidu.com:443/ad/index.html?id=4&name=mouse&tag=10'
// const parseStr = url.parse(urlString,true)
// console.log(parseStr);


// 通过一个对象，格式化成一个地址
// const urlObj = {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?id=4&name=mouse&tag=10',
//   query: { id: '4', name: 'mouse', tag: '10' },
//   pathname: '/ad/index.html',
//   path: '/ad/index.html?id=4&name=mouse&tag=10',
//   href: 'https://www.baidu.com:443/ad/index.html?id=4&name=mouse&tag=10'
// }

// console.log(url.format(urlObj));

var a = url.resolve('/one/two/three','four')
console.log(a); // /one/two/four

var a = url.resolve('/one/two/three/','four')
console.log(a); // /one/two/three/four

var a = url.resolve('/one/two/three','/four')
console.log(a); // /four

var b = url.resolve('http://example.com/aaa/bbb/ccc','/one')
console.log(b); // http://example.com/one