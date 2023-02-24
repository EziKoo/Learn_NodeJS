/* 
// 如何在一个函数体里，输出函数本身？
function demo() {
  console.log(arguments.callee.toString); // 输出demo函数
}
demo()
*/

// 2、Node中任何一个模块(js文件)都被一个外层函数所包裹
// console.log(arguments.callee.toString());

/* 
function (exports, require, module, __filename, __dirname) {
  exports: 用于支持CommonJs模块化规范的暴露语法
  require：用于支持CommonJs模块化规范的引入语法
  module：用于支持CommonJs模块化规范的暴露语法
  __filename：当前运行文件的绝对路径
  __dirname：当前运行文件所在文件夹的绝对路径
  你所写的文件里面的内容 
}
*/

// C:\Users\QSKJ-00473\Desktop\QS_Chy\Learn_NodeJS\01_认识Node.js\01_hello.js
console.log(__filename);
// C:\Users\QSKJ-00473\Desktop\QS_Chy\Learn_NodeJS\01_认识Node.js
console.log(__dirname);

/* 
3、为什么要设计这个外层函数(这个外层函数有什么作用？)
  1).用于支持CommonJs模块化语法
  2).隐藏服务器内部实现(从作用域角度去看)
*/