const moduleA = require('./a')

function test() {
  console.log('bbb');
}

console.log(moduleA.upper('hahaha'));

module.exports = test