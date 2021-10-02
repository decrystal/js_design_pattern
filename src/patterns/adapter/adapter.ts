//adaptee，需要做适配的使用者
class adaptee {
  constructor() {
  
  }
  specifyRequest() {
    return "需要电压240V"
  }
}

//target是用来做适配的，adapter
class target {
  adaptee: adaptee;
  constructor() {
    this.adaptee = new adaptee();
  }
  request() {
    let info = this.adaptee.specifyRequest()
    return `${info}-->转换-->需要的220V`
  }
}

let adapter = new target()
console.log(adapter.request())