const fs = require('fs')
const path = require('path')
const mime = require('mime')

// function route(res, pathname) {
//   switch (pathname) {
//     case "/login":
//       res.writeHead(200, {"Content-Type": "text/html;chaset=utf-8"})
//       res.write(fs.readFileSync('./static/login.html'), 'utf-8')
//       break
//     case "/home":
//       res.writeHead(200, {"Content-Type": "text/html;chaset=utf-8"})
//       res.write(fs.readFileSync('./static/index.html'), 'utf-8')
//       break
//     default:
//       res.writeHead(404, {"Content-Type": "text/html;chaset=utf-8"})
//       res.write(fs.readFileSync('./static/404.html'), 'utf-8')
//   }
// }

// module.exports = route

function render(res, path, type = "") {
  res.writeHead(200, {"Content-Type": `${type ? type : "text/html"};chaset=utf-8`})
  res.write(fs.readFileSync(path), 'utf-8')
  res.end()
}

const route = {
  "/": (req, res) => {
    render(res, "./static/index.html")
  },
  "/login": (req, res) => {
    render(res, "./static/login.html")
  },
  "/home": (req, res) => {
    render(res, "./static/index.html")
  },
  "/404": (req, res) => {
    //判断是不是静态资源文件夹下内容
    if (readStaticFile(req, res)) {
      return
    }
    res.writeHead(404, {"Content-Type": "text/html;chaset=utf-8"})
    res.write(fs.readFileSync('./static/404.html'), 'utf-8')
    res.end()
  },
  // "/favicon.ico": (req, res) => {
  //   render(res, "./static/favicon.ico", "image/x-icon")
  // }
}

//静态资源管理
function readStaticFile(req, res) {
  //获取路径值
  const myURL = new URL(req.url, "http://127.0.0.1:3000")
  const pathname = path.join(__dirname, "/static", myURL.pathname)

  if (fs.existsSync(pathname)) {
    //处理显示返回
    render(res, pathname, mime.getType(myURL.pathname.split(".")[1]))
    return true
  } else {
    return false
  }
}

module.exports = route