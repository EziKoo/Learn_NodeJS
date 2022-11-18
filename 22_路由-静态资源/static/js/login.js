let ologin = document.querySelector("#login")
let ologinpost = document.querySelector("#loginpost")
let username = document.querySelector("#username")
let password = document.querySelector("#password")

ologin.onclick = function () {
  // console.log("点击了按钮");
  //get请求
  fetch(`/api/login?username=${username.value}&password=${password.value}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
}

ologinpost.onclick = function () {
  // console.log("点击了按钮");
  //get请求
  fetch(`/api/loginpost`, {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.text()).then(res => {
    console.log(res);
  })
}