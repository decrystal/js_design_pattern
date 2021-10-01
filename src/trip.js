class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(this.car)
    console.log(`行程开始，名称：${this.car.name}, 车牌号：${this.car.number}`)
  }
  end() {
     console.log(`行程结束，车费为：${this.car.price*5}`)
  }
}
export default Trip;