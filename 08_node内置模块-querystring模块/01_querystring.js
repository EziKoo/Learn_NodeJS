let str = 'name=chy&age=20&location=jianxi'

const querystring = require("querystring")

const obj = querystring.parse(str)

console.log(obj);

const obj2 = {
  name: 'chy',
  age: 22,
  height: 1.88
}

let mystr = querystring.stringify(obj2)
console.log(mystr);

let str1 = 'id=3&city=北京&url=https://www.baidu.com'
let escaped = querystring.escape(str1)

console.log(escaped);

let escape1 = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
let str2 = querystring.unescape(escape1)
console.log(str2);