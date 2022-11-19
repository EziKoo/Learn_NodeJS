const express = require('express')

const app = express()

app.get("/", (req, res) => {
  // res.write("hello,world")
  // res.end()

  //结合了上面两个
  // res.send("hello，World")

  //可以直接解析html代码片段
  // res.send(`
  //   <div>
  //     <h1>这是一级标题</h1>
  //   </div>
  // `)

  //可以直接传送接口
  // res.send({
  //   name: 'chy',
  //   age: 22
  // })
})

//字符串模式
// app.get("/ab?cd", (req, res) => {
//   res.send('ok')
// })

// app.get("/ab/:id",(req,res)=>{
//   res.send("ok")
// })

// app.get("/ab+cd", (req, res) => {
//   res.send("ok")
// })

// app.get("/ab*cd", (req, res) => {
//   res.send("ok")
// })

//使用正则表达式的写法
// app.get(/.*fly$/, (req, res) => {
//   res.send("ok")
// })

// app.get("/home", (req, res, next) => {
//   console.log("验证token");
//   const isValid = false
//   if(isValid){
//     next()
//   }else{
//     res.send("error")
//   }
// }, (req, res) => {
//   res.send({list: [1, 2, 3]})
// })
//
//
// app.listen(3000, () => {
//   console.log("服务器已开启");
// })


//写成数组形式
const fun1 = (req, res, next) => {
  console.log("验证token");
  const isValid = true
  if (isValid) {
    res.chy = "这是fun1计算的结果"
    next()
  } else {
    res.send("error")
  }
}

const fun2 = (req, res) => {
  console.log(res.chy);
  res.send({list: [1, 2, 3]})
}


app.get("/home", [fun1, fun2])


app.listen(3000, () => {
  console.log("服务器已开启");
})
