import Trip from "./trip";
import Car, {fastCar, zhuanCar} from "./Car";

function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const foo = {
  Foo() {
    console.log('this is Foo')
  }
}
@mixins(foo)
class myClass {

}
let obj = new myClass()
console.log(obj)
obj.Foo()


let carOne = new fastCar(124, '奔驰')
let tripOne = new Trip(carOne);
tripOne.start();
tripOne.end();
