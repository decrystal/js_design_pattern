class Car {
  constructor(num, carName) {
    this.number = num;
    this.name = carName
  }
}

class fastCar extends Car {
  constructor(num, carName ) {
    super(num, carName)
    this.price = 1
  }
}

class zhuanCar extends Car {
  constructor(num, carName ) {
    super(num, carName)
    this.price = 2
  }
}
export default Car;
export {fastCar, zhuanCar};