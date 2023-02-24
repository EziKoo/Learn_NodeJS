// console.log("hello NodeJs");

// function test() {
//   console.log("哈哈哈");
// }

// test();

// 如何在一个函数体里，输出函数本身？


// 2、Node中任何一个模块(js文件)都被一个外层函数所包裹
console.log(arguments.callee.toString());

// function (exports, require, module, __filename, __dirname) { 
//   /* 你所写的文件里面的内容 */
// }

