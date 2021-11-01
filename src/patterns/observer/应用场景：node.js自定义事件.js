//简单应用场景：网页事件绑定和promise看文档；

const EventEmitter = require('events').EventEmitter;
const emit1 = new EventEmitter()
emit1.on('some',data=>{
  console.log( `监听到some促发了，${data}`)
})

function some () {}
setTimeout(()=>{
  //emit1.emit('some')必须这样调用,促发函数
  emit1.emit('some', "test")
}, 1000)

//EventEmitter是一个类，可以实现继承；
class dog extends EventEmitter {
  constructor(name) {
    super()
    //super之后下面this才生效，不然报错
    this.name = name;
  }
}
const dg1 = new dog('teddy')
dg1.on('bark', data=> {
  console.log(`bark is emit, this is data: ${data}`)
})
function bark() {}
setTimeout(()=>{
  dg1.emit('bark', 'didididi')
}, 1000)