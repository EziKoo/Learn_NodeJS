function render(res, data, type = "") {
  res.writeHead(200, {"Content-Type": `${type ? type : "application/json"};chaset=utf-8`})
  res.write(data)
  res.end()
}

const apiRoute = {
  "/api/login": (req, res) => {
    //获取参数
    const myURL = new URL(req.url, "http://127.0.0.1")
    if (myURL.searchParams.get("username") === 'chy' && myURL.searchParams.get('password') === "123456") {
      render(res, `{"ok":1}`)
    } else {
      render(res, `{"ok":0}`)
    }
  },

  "/api/loginpost": (req, res) => {
    //获取参数
    let post = ""
    req.on("data",chunk=>{
      console.log(chunk);
      post += chunk
    })

    req.on("end",()=>{
      console.log(post);
      post = JSON.parse(post)
      if(post.username === 'chy' && post.password === '123456'){
        render(res, `{"ok":1}`)
      }else{
        render(res, `{"ok":0}`)
      }
    })

  }
}

module.exports = apiRoute