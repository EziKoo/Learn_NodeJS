const http = require('http')
const Router = {}

function use(obj){
  Object.assign(Router,obj)
}

function start(){
  http.createServer((req, res) => {

    const myURL = new URL(req.url, 'http:/127.0.0.1')
    // console.log(myURL.pathname);
    // route(res, myURL.pathname)
    try {
      Router[myURL.pathname](req,res)
    } catch (error) {
      Router['/404'](req,res)
    }
  }).listen(3000, () => {
    console.log("服务器已开启");
  })
}

module.exports = {start,use}