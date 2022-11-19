const eventEmitter = require('events')

const event = new eventEmitter()

event.on("play", (data) => {
  console.log("play事件触发了", data);
})

event.on("run", (data) => {
  console.log("run事件被触发了", data);
})

setTimeout(() => {
  event.emit("play", 1111)
  event.emit("run", 2222)
}, 2000)