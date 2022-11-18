var http = require('http')

// 创建服务器
http.createServer((req,res) => {
  // 接收浏览器传的参数，然后返回渲染的内容
  // req 接收浏览器传的参数
  // res 返回渲染的内容
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  res.write('hello world1111<br>')
  res.write('hello world2222<br>')
  res.write('hello world3333<br>')
  res.write(`
  <html>
    <b>hello word</b>
    <div>大家好</div>
  </html>`)
  res.end('[12,34]')
}).listen(3000,() => {
  console.log('server start');
})