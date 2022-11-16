function test() {
  console.log('aaa');
}

function upper(str){
  return str.substring(0,1).toUpperCase() + str.substring(1)
}

// 私有方法，只要不暴露方法，别人是用不到的
function _init(){
  console.log('init');
}

module.exports = {
  test,
  upper
}

// 另外一种方式导出
// exports.test = test
// exports.upper = upper