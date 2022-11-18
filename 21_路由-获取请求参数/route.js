const fs = require('fs')

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
  "/login": (req,res) => {
    render(res, "./static/login.html")
  },
  "/home": (req,res) => {
    render(res, "./static/index.html")
  },
  "/404": (req,res) => {
    res.writeHead(404, {"Content-Type": "text/html;chaset=utf-8"})
    res.write(fs.readFileSync('./static/404.html'), 'utf-8')
    res.end()
  },
  "/favicon.ico": (req,res) => {
    render(res, "./static/favicon.ico", "image/x-icon")
  }
}

module.exports = route