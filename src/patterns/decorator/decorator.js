//其实下面代码实际是通过myClass类
function mixins(...list) {
  console.log(...list,"<--")
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const foo = {
  Foo() {
    console.log('this is Foo')
  }
}

class myClass {

}
let obj = new myClass()
// obj.Foo()
